function getProductCard(name, ingredients){
    let items = ""
    for(let i = 0; i < ingredients.length; i++){
        if(i == 5){
            items += `<li>...</li>`
            break
        }
        items += `<li>${ingredients[i]}</li>`
    }
    return `<div class="productCard" id="${name}" onclick="goUrl(transformToUrl(this.id))">
    <img src="style/resources/pizza/${name}.jpg" alt="pizza img ${name}">
    <div>
        <p>Pizza ${name}</p>
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
        items += getProductCard(products[i].name, products[i].ingredients)
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
            <input id="buttonOrder" type="button" value="Order ${price}$" onclick="order()">
        </div>
    </div>`
}
function getNewPage(newArray){
    let items = `<img src="style/resources/pizza/${newArray[0].name}.jpg" class="block" alt="new ${newArray[0].name}"></img>`
    for(let i = 1; i < newArray.length; i++){
        items += `<img src="style/resources/pizza/${newArray[i].name}.jpg" alt="new ${newArray[i].name}">`
    }
    return `<h1>New</h1>
    <div id="slider">
        ${items}
        <button id="buttonNext" onclick="sliderNext()">Next</button>
    </div>`
}