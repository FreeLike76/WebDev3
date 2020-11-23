let btnRight = document.querySelector("#buttonRight");
let slider = document.querySelector("#slider");
let imagesArray = slider.querySelectorAll("img");
let i = 0

btnRight.addEventListener("click", function () {
    ++i
    if (i >= imagesArray.length) {
        imagesArray[i-1].classList.remove("block");
        i = 0;
        imagesArray[i].classList.add("block");
    } else {
        imagesArray[i-1].classList.remove("block");
        imagesArray[i].classList.add("block");
    }
})