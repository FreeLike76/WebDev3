function drawMenu(menu){
    let page= ""
    for(category of menu){
        page += getproductGrid(category.category, category.products)
    }
    return page
}

function drawProduct(name, menu){
    let page = ""
    let thisCategory = ""
    for(category of menu){
        for(product of category.products){
            if(product.name==name){
                thisCategory=category.category
                page += getproductPage(product.name, product.ingredients, product.price)
                break
            }
        }
    }
    for(category of menu){
        if(category.category==thisCategory){
            let similar = []
            for(product of category.products){
                if(product.name != name){
                    similar.push(product)
                }
            }
            page += getproductGrid("You may also like:", similar, 3)
            break
        }
    }
    return page
}