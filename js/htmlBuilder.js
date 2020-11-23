function drawMenu(menu){
    let page= ""
    for(category of menu){
        page += getProductGrid(category.category, category.products)
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
                page += getProductPage(product.name, product.ingredients, product.price)
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
            page += getProductGrid("You may also like:", similar, 3)
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
    page += getNewPage(newArray)
    page += getProductGrid("Try them", newArray)
    return page
}