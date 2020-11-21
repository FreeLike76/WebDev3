function drawMenu(menu){
    let page= ""
    console.log(menu)
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
    return page
}