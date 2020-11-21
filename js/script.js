
let header = document.querySelector("header")
let mainPage = document.querySelector("#mainPage")

let menu
productPromise.then(data=>{
    menu = data
    mainPage.innerHTML = drawProduct("Curry", menu)
}).catch(()=>{
    mainPage.innerHTML="Error! Try reloading the page."
})

function setPageMenu(){
    window.scroll(0, 400)
    mainPage.innerHTML = drawMenu(menu)
}
function setPageProduct(id){
    window.scroll(0, 400)
    mainPage.innerHTML = drawProduct(id, menu)
}

window.addEventListener("scroll", function(){
    header.classList.toggle("fullHeader", window.scrollY >= 400)
})
