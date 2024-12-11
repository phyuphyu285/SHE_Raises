const counts = document.querySelectorAll('.count')
const speed = 97
counts.forEach((counter) => {
    function upData(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed
        if(count < target){
            counter.innerText = Math.floor(inc + count)
            setTimeout(upData, 1)
        }else{
            counter.innerText = target
        }
    }
    upData()
})

/*Profile statistic8*/
const counter = document.querySelectorAll(".counter");
counter.forEach(Counter);

function Counter(value){
    value.innerText = "0";
    //calling function
    incresasingCounter();
    function incresasingCounter(){
        let currentNum = +value.innerText;
        let dataCeil = value.getAttribute("data-ceil");
        let incresement = dataCeil/12;
        currentNum = Math.ceil(currentNum + incresement);
        if(currentNum < dataCeil){
            value.innerText = currentNum;
            setTimeout(incresasingCounter, 1000);
        }
        else
        value.innerText = dataCeil;
    }
}