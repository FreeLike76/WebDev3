
function setPageMenu(){
    mainPage.innerHTML = drawMenu(global_menu)
}

function setPageProduct(id){
    mainPage.innerHTML = drawProduct(id, global_menu)

    let buttonOrder = document.querySelector("#buttonOrder")
    buttonOrder.addEventListener("click",function(){
        for(category of global_menu){
            for(product of category.products){
                if(buttonOrder.value==product.name){
                    addCart(product, 1)
                    break
                }
            }
        }
    })
}

function setPageNew(){
    mainPage.innerHTML = drawNew(global_menu)

    let buttonNext = document.querySelector("#buttonNext")
    buttonNext.addEventListener("click",function(){
        let slider = document.querySelector("#slider")
        let imagesArray = slider.querySelectorAll("img")
        ++global_slider
        if (global_slider >= imagesArray.length) {
            imagesArray[global_slider-1].classList.remove("block");
            global_slider = 0;
            imagesArray[global_slider].classList.add("block");
        } else {
            imagesArray[global_slider-1].classList.remove("block");
            imagesArray[global_slider].classList.add("block");
        }
    })
    return 0
}

function setPageCart(){
    orderList = loadCart()
    if(orderList.length  > 0){
        orderList.sort((first, second)=>{
            return second.amount - first.amount
        })
        mainPage.innerHTML = drawCart(orderList)

        let buttonAccept = document.querySelector("#acceptOrder")
        let buttonClear = document.querySelector("#clearOrder")
        
        buttonAccept.addEventListener("click", function(){

        })
        buttonClear.addEventListener("click", function(){
            saveCart("")
            goUrl("new")
            refreshCart()
        })
    }
    else{
        mainPage.innerHTML = "Your cart is empty"
    }
}