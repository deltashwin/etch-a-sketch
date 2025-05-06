const container = document.querySelector("#container");


let numSquares = 16

let width = 960 / numSquares;


for (let i = 0; i<(numSquares**2);i++){

    const canvas = document.createElement("div");
    canvas.classList.add("canvas");

    canvas.style.height = `${width}px`;
    canvas.style.width =  `${width}px`;

    container.appendChild(canvas);

}

const boxes = document.querySelectorAll(".canvas");

boxes.forEach((div) => {

    div.addEventListener("mouseenter",(e)=>{
        
        e.target.classList.add("hovered");    
    })

});






