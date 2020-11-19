let header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("fullHeader", window.scrollY > 350)
})