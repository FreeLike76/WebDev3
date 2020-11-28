function getProductCard(name, ingredients, price){
    let items = ""
    for(let i = 0; i < ingredients.length; i++){
        if(i == 4){
            items += `<li>...</li>`
            break
        }
        items += `<li>${ingredients[i]}</li>`
    }
    return `<div class="productCard" id="${name}" onclick="switchPage(transformToUrl(this.id))">
    <img src="style/resources/pizza/${name}.jpg" alt="pizza img ${name}">
    <div>
        <p>Pizza ${name}</p>
        <span>${price}$</span>
        <ul>
            ${items}
        <ul>
    </div>
</div>`
}

function getProductGrid(gridName, products, max = 0){
    let items = ""
    if(max == 0){
        max = products.length
    }
    for(let i = 0; i < max; i++){
        items += getProductCard(products[i].name, products[i].ingredients, products[i].price)
    }
    return `<h1>${gridName}</h1><hr><div class="productGrid">${items}</div>`
}

function getProductPage(name, ingredients, price){
    let items = ""
    for(let i = 0; i < ingredients.length; i++){
        items += `<li>${ingredients[i]}</li>`
    }
    return `<h1>Pizza ${name}</h1>
    <div id="productPage">
        <img src="style/resources/pizza/${name}.jpg">
        <div>
            <ul>
                ${items}
            </ul>
            <p>Weight: 0.45 kg</p>
            <button id="buttonOrder" value="${name}">Order ${price}$</button>
        </div>
    </div>`
}
function getNewPage(newArray){
    let items = `<img src="style/resources/pizza/${newArray[0].name}.jpg" class="block" alt="new ${newArray[0].name}"></img>`
    for(let i = 1; i < newArray.length; i++){
        items += `<img src="style/resources/pizza/${newArray[i].name}.jpg" alt="new ${newArray[i].name}">`
    }
    return `<h1>New items on menu</h1>
    <div id="slider">
        ${items}
        <button id="buttonNext">Next</button>
    </div>`
}

function getConfirmation(){
    return `<h1>Confirmation</h1><hr>
    <div id="confirm">
    <button id="acceptOrder" onclick="switchPage('order')">Accept Order</button>
    <button id="clearOrder">Clear Order</button>
    </div>`
}

function getOrderPage(){
    return `<h1>Creating order</h1>
    <div id="order">
        <form>
            <label for="formFitstName">First name:</label>
            <input id="formFitstName" required minlength="2" maxlength="16">

            <label for="formLastName">Last name:</label>
            <input id="formLastName" required minlength="2" maxlength="16">

            <label for="formPhone">Phone number (including +38):</label>
            <input id="formPhone" required pattern="[+][0-9]{12}">

            <label for="formEmail">Enter email:</label>
            <input id="formEmail" required pattern="[a-z1-9]{8,16}[@][a-z1-9]{4,8}[.][a-z1-9]{2,8}">
            <label for="formEmailrep">Repeat email:</label>
            <input id="formEmailrep" required pattern="[a-z1-9]{8,16}[@][a-z1-9]{4,8}[.][a-z1-9]{2,8}">

            <label for="formAddress">Address</label>
            <input id="formAddress" required minlength="4" maxlength="32">

            <label for="formDetails">Details:</label>
            <input id="formDetails" type="textarea"  minlength="4" maxlength="64">

            <button onclick="switchPage('new')">Submit</button>
        </form>
    </div>`
}
export {getProductCard, getProductGrid, getProductPage, getNewPage, getConfirmation, getOrderPage}