import {loadCart} from "./localStorage.js"

let orderValue = document.querySelector("#orderValue")
let orderCount = document.querySelector("#orderCount")

function refreshCart(menu){
    let cart = loadCart()
    let totalAmount = 0
    let totalPrice = 0
    if(cart){
        for(let item of cart){
            totalAmount+=item.amount
            for(let category of menu){
                for(let product of category.products){
                    if(product.name==item.name){
                        totalPrice+=product.price*item.amount
                        break
                    }
                }
            }
        }
    }

    orderValue.innerHTML = `${totalPrice.toFixed(2)}$`
    orderCount.innerHTML = totalAmount
}

export {refreshCart}