{
    const welcome = () => {
    console.log("Witam wszystkich developerów");
};

const toggleBackground = () => {
    const body = document.querySelector(".body");
    const textColorDark = document.querySelector(".js-textColorDark");
    const buttonText = document.querySelector(".js-buttonText");

    body.classList.toggle("bodyDark");
    textColorDark.classList.toggle("textColorBright");
    buttonText.innerText = body.classList.contains("bodyDark") ? "jasny" : "ciemny";
};

const init = () => {
    const button = document.querySelector(".js-navigation__button");
    button.addEventListener("click", toggleBackground);

    welcome ();

    }


init ();

}




