import * as myElements from "./elements.js"

function drawMenu(productList){
    let page= ""
    for(category of productList.keys()){
        page += myElements.getproductGrid(category, category["ingredients"])
    }
    return page
}

export {drawMenu}
