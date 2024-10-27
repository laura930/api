const btn = document.querySelector("button");
const buttonRemove = document.getElementById("buttonRemove");
const container = document.querySelector(".container");


btn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
    .then(result => result.json())
    .then(data => {
     console.log(data.slip.advice)
     let textAdvice= document.createElement("p");
     textAdvice.innerText = data.slip.advice;
     container.appendChild(textAdvice)
    });
  });
    buttonRemove.addEventListener("click",function(){
        container.removeChild(container.lastChild);
       });
        
   