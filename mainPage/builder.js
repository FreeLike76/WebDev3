import * as myElements from "./elements.js"

function drawMenu(productList){
    let page= ""
    console.log(productList)
    let categories = productList.keys()
    for(category of categories){
        page += myElements.getproductGrid(category, category["ingredients"])
    }
    return page
}

export {drawMenu}
