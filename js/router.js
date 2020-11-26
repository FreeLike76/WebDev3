
function setPageMenu(menu){
    mainPage.innerHTML = drawMenu(menu)
}

function setPageProduct(id, menu){
    mainPage.innerHTML = drawProduct(id, menu)

    let buttonOrder = document.querySelector("#buttonOrder")
    buttonOrder.addEventListener("click",function(){
        addCart(buttonOrder.value, 1)
    })
}

function setPageNew(menu){
    mainPage.innerHTML = drawNew(menu)

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

function setPageCart(menu){
    cart = loadCart()
    if(cart){
        cart.sort((first, second)=>{
            return second.amount - first.amount
        })
        let orderList=[]
        for(item of cart){
            let found = false
            for(category of menu){
                for(product of category.products){
                    if(item.name==product.name){
                        orderList.push(Object.assign({}, product, item))
                        found = true
                    }
                    if(found){
                        break
                    }
                }
                if(found){
                    break
                }
            }
        }
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