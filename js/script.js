import {productPromise} from "./jsonReceiver.js"
import {translate} from "./dictionary.js"
import {refreshCart} from "./cart.js"
import * as myHash from "./urlHash.js"
import * as myLocalStorage from "./localStorage.js"
import * as myPageSetter from "./pageSetter.js"


let header = document.querySelector("header")
let cart = document.querySelector("#cart")
let mainPage = document.querySelector("#mainPage")

let sliderCounter = 0
let menuData


productPromise.then(data=>{
    menuData = data
    translate(menuData)
    openPage(false)
    refreshCart(menuData)
}).catch(()=>{
    mainPage.innerHTML="Error! Try reloading the page."
})



function switchPage(path){
    myHash.setUrl(path)
    openPage()
    refreshCart(menuData)
}
function openPage(offset=true){
    let path = myHash.readUrl()
    switch(path)
    {
        case "":{
            myHash.setUrl("new")
            myPageSetter.setPageNew(menuData)
            break
        }
        case "new":{
            myPageSetter.setPageNew(menuData)
            break
        }
        case "menu":{
            myPageSetter.setPageMenu(menuData)
            break
        }
        case "cart":{
            myPageSetter.setPageCart(menuData)
            break
        }
        case "order":{
            myPageSetter.setPageOrder(menuData)
            break
        }
        default:{
            let found = false
            for(let category of menuData){
                for(let product of category.products){
                    if(myHash.transformToUrl(product.name)==path){
                        myPageSetter.setPageProduct(product.name, menuData)
                        found = true
                        break
                    }
                }
                if(found){
                    break
                }
            }
            if(!found){
                myHash.setUrl("new")
                myPageSetter.setPageNew(menuData)
            }
        }
    }
    if(offset){
        window.scroll(0, 400)
    }
}

window.addEventListener("hashchange", ()=>{openPage(false)})

window.addEventListener("scroll", headerScroll)

header.addEventListener("click", headerClick)

cart.addEventListener("click", showCart)

mainPage.addEventListener("click", mainPageClick)


function headerScroll(){
    header.classList.toggle("fullHeader", window.scrollY >= 400)
}
function headerClick(e){
    if (e.target && e.target.matches("#navNew")) {
        switchPage("new")
    }
    else if (e.target && e.target.matches("#navMenu")) {
        switchPage("menu")
    }
    else if (e.target && e.target.matches("#cart")) {
        switchPage("cart")
    }
}
function showCart(){
    switchPage("cart")
}
function mainPageClick(e) {
    if(e.target && e.target.matches("div.productCard img")){
        switchPage(myHash.transformToUrl(e.target.id))
    }
    else if(e.target && e.target.matches("button#buttonNext")){
        let slider = document.querySelector("#slider")
        let imagesArray = slider.querySelectorAll("img")
        ++sliderCounter
        if (sliderCounter >= imagesArray.length) {
            imagesArray[sliderCounter-1].classList.remove("block");
            sliderCounter = 0;
            imagesArray[sliderCounter].classList.add("block");
        } else {
            imagesArray[sliderCounter-1].classList.remove("block");
            imagesArray[sliderCounter].classList.add("block");
        }
    }
    else if (e.target && e.target.matches("button#buttonOrder")) {
        let counter = document.querySelector("#buttonOrderCounter")
        let amount = parseInt(counter.value)
        console.log(amount)
        if(amount < 1 || amount > 10){
            counter.value = 1
            amount = 1
        }
        myLocalStorage.addCart(e.target.value, amount)
        refreshCart(menuData)
    }
    else if(e.target && e.target.matches("button#clearOrder")){
        myLocalStorage.saveCart("")
        switchPage("new")
    }
    else if(e.target && e.target.matches("button#acceptOrder")){
        switchPage("order")
    }
}