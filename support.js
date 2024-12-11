//Feedback
const testimonials = [
    {
        name: "Kim",
        photoUrl: "images/pfp1.jpg",
        text: "I joined Empowerment Space to connect with like-minded women, and I have learned so much! The community support is unlike any other. I’ve attended several webinars, and each one has left me feeling motivated and inspired.",
        rating: 5
    },
    {
        name: "Maria",
        photoUrl: "images/pfp2.jpg",
        text: "What I love most about Empowerment Space is how inclusive and supportive it is. I feel safe here to talk about mental health and personal growth, and I’ve made wonderful connections with other women across the globe",
        rating: 4
    },
    {
        name: "Noah",
        photoUrl: "images/pfp3.jpg",
        text: "I’ve been part of Empowerment Space for over a year now, and I’ve seen myself grow both personally and professionally. The workshops and resources have helped me build skills and confidence. Highly recommend it to any woman looking for growth!",
        rating: 4
    },
    {
        name: "Emily",
        photoUrl: "images/pfp4.jpg",
        text: "As a new entrepreneur, the business advice and networking opportunities I found through this platform have been extremely helpful. I can’t thank the Empowerment Space team enough for all the resources they've made available to women like me.",
        rating: 5
    },
    {
        name: "Izzi",
        photoUrl: "images/pfp5.jpg",
        text: "Empowerment Space has been a game-changer for me! The mentorship program helped me land my dream job, and the resources available have been invaluable in building my confidence. Thank you for this incredible platform!",
        rating: 5
    }
];

let index = 0;

function updateTestimonials() {
    const carouselItems = document.getElementById("testimonialCarouselItems");
    carouselItems.innerHTML = ""; 

    testimonials.forEach((testimonial, idx) => {
        const isActive = idx === 0 ? "active" : "";
        const stars = "★".repeat(testimonial.rating) + "☆".repeat(5 - testimonial.rating); 

        const testimonialHTML = `
            <div class="carousel-item ${isActive}">
                <div class="testimonial-item show">
                    <img src="${testimonial.photoUrl}" alt="userimage">
                    <p class="feedback-text">"${testimonial.text}"</p>
                    <h6 class="mt-4 username">${testimonial.name}</h6>
                    <div class="stars">${stars}</div>
                </div>
            </div>
        `;
        carouselItems.innerHTML += testimonialHTML;
    });
}

updateTestimonials();



//FAQ
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('collapsed');
    });
});



//Posting
let currentEditPost = null; 

document.getElementById('submitPost').addEventListener('click', function () {
    const postText = document.getElementById('postText').value;
    const postImage = document.getElementById('postImage').files[0];

    if (!postText && !postImage) {
    alert('Please enter text or upload an image!');
    return;
    }

    if (currentEditPost) {
    currentEditPost.querySelector('.post-text').textContent = postText;

    const existingImage = currentEditPost.querySelector('.post-image');
    if (postImage) {
        if (existingImage) {
        existingImage.src = URL.createObjectURL(postImage);
        } else {
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(postImage);
        imageElement.alt = 'Uploaded image';
        imageElement.className = 'post-image';
        currentEditPost.appendChild(imageElement);
        }
    } else if (existingImage) {
        existingImage.remove();
    }

    currentEditPost = null; 
    } else {
    const postArea = document.getElementById('post-area');
    const postCard = document.createElement('div');
    postCard.className = 'post-card';

    const textParagraph = document.createElement('p');
    textParagraph.className = 'post-text';
    textParagraph.textContent = postText;
    postCard.appendChild(textParagraph);

    if (postImage) {
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(postImage);
        imageElement.alt = 'Uploaded image';
        imageElement.className = 'post-image';
        postCard.appendChild(imageElement);
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'mt-3';

    const editButton = document.createElement('button');
    editButton.className = 'btn btn-warning btn-sm btn-action';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
        currentEditPost = postCard; 
        document.getElementById('postText').value = textParagraph.textContent;

        const imageInput = document.getElementById('postImage');
        imageInput.value = ''; 

        const modal = new bootstrap.Modal(document.getElementById('postModal'));
        modal.show();
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm btn-action';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        postCard.remove();
    });

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    postCard.appendChild(buttonContainer);

    postArea.prepend(postCard);
    }

    document.getElementById('postForm').reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('postModal'));
    modal.hide();
});