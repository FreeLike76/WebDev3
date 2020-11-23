
function setPageMenu(menu){
    mainPage.innerHTML = drawMenu(menu)
}
function setPageProduct(id, menu){
    mainPage.innerHTML = drawProduct(id, menu)
}
function setPageNew(menu){
    mainPage.innerHTML = drawNew(menu)
    return 0
}
