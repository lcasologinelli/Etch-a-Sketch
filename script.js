const container = document.querySelector(".container");
const btn = document.querySelector("#btnSize")
const counter = document.querySelector("#counter")

const containerWidth = container.clientWidth;

let quantity = 16;

function createDiv(nDivs){
    for(let i=0; i<nDivs*nDivs; i++){
    const newDiv = document.createElement("div")
    newDiv.style.background = "hsl(0,0%,100%)"
    newDiv.style.width = `${containerWidth/nDivs}px`
    newDiv.style.height = `${containerWidth/nDivs}px`
    container.appendChild(newDiv)
    }
}

function colorRefactor(str){
    let result = ""
    for(let i=0; i<str.length; i++){
        if(Number(str[i])|| str[i] == '0'){
            result+=String(str[i])
        }
    }
    return str=Number(result-25);
}


btn.addEventListener("click", () => {
    if(counter.value==""){
        alert("Please Insert a value between 1 and 100")
    }
    else if(counter.value > 100){
        alert("Please Insert a value between 1 and 100")
    }
    else{
        while(container.firstChild){
            container.removeChild(container.lastChild)
        }
        createDiv(counter.value)
    }
})

container.addEventListener("mouseover", (event)=> {
    let color = event.target.style.backgroundColor.split(",")
    for(let i=0; i<color.length; i++){
        color[i] = colorRefactor(color[i])
    }
    event.target.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`
})

createDiv(quantity)



