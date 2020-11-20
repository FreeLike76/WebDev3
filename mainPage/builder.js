import * as myElements from "./elements.js"

function drawMenu(productList){
    let page= ""
    console.log(productList)
    categories=productList.keys();
    for(category of categories){
        page += myElements.getproductGrid(category, productList[category])
    }
    return page
}

export {drawMenu}
