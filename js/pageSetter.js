import * as myBuilder from "./htmlBuilder.js"
import {loadCart} from "./localStorage.js"

let setPage = document.querySelector("#mainPage")

function setPageMenu(menu){
    setPage.innerHTML = myBuilder.drawMenu(menu)
}
function setPageProduct(id, menu){
    setPage.innerHTML = myBuilder.drawProduct(id, menu)
}
function setPageNew(menu){
    setPage.innerHTML = myBuilder.drawNew(menu)
}
function setPageCart(menu){
    let cart = loadCart()
    if(cart){
        cart.sort((first, second)=>{
            return second.amount - first.amount
        })
        let orderList=[]
        for(let item of cart){
            let found = false
            for(let category of menu){
                for(let product of category.products){
                    if(item.name==product.name){
                        orderList.push(Object.assign({}, product, item))
                        found = true
                    }
                    if(found){
                        break
                    }
                }
                if(found){
                    break
                }
            }
        }
        setPage.innerHTML = myBuilder.drawCart(orderList)
    }
    else{
        setPage.innerHTML = "Your cart is empty"
    }
}
function setPageOrder(){
    setPage.innerHTML = myBuilder.drawOrder()
}

export {setPageMenu, setPageProduct, setPageNew, setPageCart, setPageOrder}