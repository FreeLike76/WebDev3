let header = document.querySelector("header")
let orderValue = document.querySelector("#orderValue")
let orderCount = document.querySelector("#orderCount")
let mainPage = document.querySelector("#mainPage")

window.addEventListener("scroll", function(){
    header.classList.toggle("fullHeader", window.scrollY >= 400)
})

let global_slider = 0
let global_menu

productPromise.then(data=>{
    global_menu = data
    translate(global_menu)
    refreshCart()
    openPage(false)
}).catch(()=>{
    mainPage.innerHTML="Error! Try reloading the page."
})

function setUrl(path){
    window.location.hash = path
}
function goUrl(path){
    window.location.hash = path
    openPage()
}
function readUrl(){
    return window.location.hash.slice(1)
}
function transformToUrl(path){
    return path.toLowerCase().replaceAll(" ", "_")
}

function openPage(offset=true){
    let path = readUrl()
    if(path==""){
        setUrl("new")
        global_slider = setPageNew()
    }
    else if(path=="new"){
        global_slider = setPageNew()
    }
    else if(path=="menu"){
        setPageMenu()
    }
    else if(path=="cart"){
        setPageCart()
    }
    else{
        found = false
        for(category of global_menu){
            for(product of category.products){
                if(transformToUrl(product.name)==path){
                    window.innerHTML = setPageProduct(product.name)
                    found = true
                    break
                }
            }
            if(found){
                break
            }
        }
        if(!found){
            setUrl("new")
            window.innerHTML = setPageNew()
        }
    }
    if(offset){
        window.scroll(0, 400)
    }
}

function refreshCart(){
    let orderList = loadCart()
    let totalAmount = 0
    let totalPrice = 0
    if(orderList){
        for(ordered of orderList){
            totalAmount+=ordered.amount
            totalPrice+=ordered.amount * ordered.price
        }
    }
    orderValue.innerHTML = `${totalPrice}$`
    orderCount.innerHTML = totalAmount
}