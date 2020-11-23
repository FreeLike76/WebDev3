let header = document.querySelector("header")
let mainPage = document.querySelector("#mainPage")
let global_slider = 0
let global_menu

productPromise.then(data=>{
    global_menu = data
    translate(global_menu)
    openPage(false)
}).catch(()=>{
    mainPage.innerHTML="Error! Try reloading the page."
})

function setUrl(path){
    window.location.hash = path
}

function goUrl(path){
    window.location.hash = path
    openPage()
}

function readUrl(){
    return window.location.hash.slice(1)
}

function transformToUrl(path){
    return path.toLowerCase().replaceAll(" ", "_")
}

function openPage(offset=true){
    let path = readUrl()
    if(path==""){
        setUrl("new")
        global_slider = setPageNew(global_menu)
    }
    else if(path=="new"){
        global_slider = setPageNew(global_menu)
    }
    else if(path=="menu"){
        setPageMenu(global_menu)
    }
    else{
        found = false
        for(category of global_menu){
            for(product of category.products){
                if(transformToUrl(product.name)==path){
                    window.innerHTML = setPageProduct(product.name, global_menu)
                    found = true
                    break
                }
            }
            if(found){
                break
            }
        }
        if(!found){
            setUrl("New")
            window.innerHTML = setPageNew(global_menu)
        }
    }
    if(offset){
        window.scroll(0, 400)
    }
}

function sliderNext() {
    let slider = document.querySelector("#slider")
    let imagesArray = slider.querySelectorAll("img")
    ++global_slider
    if (global_slider >= imagesArray.length) {
        imagesArray[global_slider-1].classList.remove("block");
        global_slider = 0;
        imagesArray[global_slider].classList.add("block");
    } else {
        imagesArray[global_slider-1].classList.remove("block");
        imagesArray[global_slider].classList.add("block");
    }
}

window.addEventListener("scroll", function(){
    header.classList.toggle("fullHeader", window.scrollY >= 400)
})
