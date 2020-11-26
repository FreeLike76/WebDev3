function loadCart(){
    return JSON.parse(window.localStorage.getItem("cart"))
}
function saveCart(orderList){
    window.localStorage.setItem("cart",JSON.stringify(orderList))
}
function addCart(productName, amount){
    let cart = loadCart()
    let isOrdered = false
    if(cart){
        for(item of cart){
            if(productName==item.name){
                item.amount += amount
                isOrdered=true
                break
            }
        }
    }
    else{
        cart=[]
    }
    if(!isOrdered){
        cart.push({"name":productName,"amount":amount})
    }
    saveCart(cart)
    refreshCart()
}
