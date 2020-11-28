import * as myHash from "./urlHash.js"
import * as myLocalStorage from "./localStorage.js"

let header = document.querySelector("header")
let orderValue = document.querySelector("#orderValue")
let orderCount = document.querySelector("#orderCount")
let mainPage = document.querySelector("#mainPage")

window.addEventListener("scroll", function(){
    header.classList.toggle("fullHeader", window.scrollY >= 400)
})

let sliderConter = 0
let menuData

productPromise.then(data=>{
    menuData = data
    translate(menuData)
    switchPage(false)
}).catch(()=>{
    mainPage.innerHTML="Error! Try reloading the page."
})

function switchPage(path){
    myHash.setUrl(path)
    openPage()
    refreshCart()
}

function openPage(offset=true){
    let path = myHash.readUrl()
    switch(path)
    {
        case "":{
            myHash.setUrl("new")
            sliderConter = setPageNew(menuData)
            break
        }
        case "new":{
            sliderConter = setPageNew(menuData)
            break
        }
        case "menu":{
            setPageMenu(menuData)
            break
        }
        case "cart":{
            setPageCart(menuData)
            break
        }
        case "order":{
            setOrderPage(menuData)
            break
        }
        default:{
            found = false
            for(category of global_menu){
                for(product of category.products){
                    if(transformToUrl(product.name)==path){
                        window.innerHTML = setPageProduct(product.name, menuData)
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
                sliderConter = setPageNew(menuData)
            }
        }
        
    }
    if(offset){
        window.scroll(0, 400)
    }
}

function refreshCart(){
    let cart = myLocalStorage.loadCart()
    let totalAmount = 0
    let totalPrice = 0
    if(cart){
        for(item of cart){
            totalAmount+=item.amount
            for(category of menuData){
                for(product of category.products){
                    if(product.name==item.name){
                        totalPrice+=product.price*item.amount
                        break
                    }
                }
            }
        }
    }
    orderValue.innerHTML = `${totalPrice}$`
    orderCount.innerHTML = totalAmount
}
