import * as myElements from "./htmlElements.js"

function drawMenu(menu){
    let page= ""
    for(category of menu){
        page += myElements.getProductGrid(category.category, category.products)
    }
    return page
}

function drawProduct(name, menu){
    let page = ""
    let thisCategory = ""
    for(let category of menu){
        for(let product of category.products){
            if(product.name==name){
                thisCategory=category.category
                page += myElements.getProductPage(product.name, product.ingredients, product.price)
                break
            }
        }
    }
    for(let category of menu){
        if(category.category==thisCategory){
            let similar = []
            for(product of category.products){
                if(product.name != name){
                    similar.push(product)
                }
            }
            page += myElements.getProductGrid("You may also like:", similar, 3)
            break
        }
    }
    return page
}

function drawNew(menu){
    let page = ""
    let newArray = []
    for(category of menu){
        for(product of category.products){
            if(product.isNew == 1){
                newArray.push(product)
            }
        }
    }
    page += myElements.getNewPage(newArray)
    page += myElements.getProductGrid("Try them", newArray)
    return page
}
function drawCart(orderList){
    let page= ""
    for(let i = orderList[0].amount; i!=0; i--){
        let sameAmount=[]
        for(ordered of orderList){
            if(ordered.amount<i){
                break
            }
            if(ordered.amount==i){
                sameAmount.push(ordered)
            }
        }
        if(sameAmount.length>0){
            page += myElements.getProductGrid(`Amount: ${i}`, sameAmount)
        }
    }
    page += myElements.getConfirmation()
    return page
}

function drawOrder(){
    return myElements.getOrderPage()
}

export {drawMenu, drawProduct, drawNew, drawCart, drawOrder}