console.log("Cześć!");

let button = document.querySelector(".js-navigation__button");
let body = document.querySelector(".body");
let textColorDark = document.querySelector(".textColorDark");
let buttonText = document.querySelector(".buttonText");

// button.addEventListener("click", () => {
//     body.classList.toggle("bodyDark");
//     textColorDark.classList.toggle("textColorBright");
//     buttonText.innerText = body.classList.contains("bodyDark") ? "jasny" : "ciemny"; 

// });

button.addEventListener("click", () => {
    body.classList.toggle("bodyDark");
    textColorDark.classList.toggle("textColorBright");
    buttonText.innerText = body.classList.contains("bodyDark") ? "jasny" : "ciemny";

}); 