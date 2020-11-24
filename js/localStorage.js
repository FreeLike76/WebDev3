function loadCart(){
    return JSON.parse(window.localStorage.getItem("cart"))
}
function saveCart(orderList){
    window.localStorage.setItem("cart",JSON.stringify(orderList))
}
function addCart(product, amount){
    let orderList = loadCart()
    let isOrdered = false
    if(orderList){
        for(ordered of orderList){
            if(product.name==ordered.name){
                ordered.amount+=amount
                isOrdered=true
                break
            }
        }
    }
    else{
        orderList=[]
    }
    if(!isOrdered){
        product.amount=amount
        orderList.push(product)
    }
    saveCart(orderList)
    refreshCart()
}
