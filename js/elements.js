function getproductCard(name, ingredients){
    let items = ""
    for(let i = 0; i < ingredients.length; i++){
        if(i == 5){
            items += `<li>...</li>`
            break;
        }
        items += `<li>${ingredients[i]}</li>`
    }
    return `<div class="productCard" id="${name} onclick="dothis2()"">
    <img src="style/resources/pizza/${name}.jpg" alt="pizza img ${name}">
    <div>
        <p>Pizza ${name}</p>
        <ul>
            ${items}
        <ul>
    </div>
</div>`
}

function getproductGrid(gridName, products, max = 0){
    let items = ""
    if(max == 0){
        max = products.length
    }
    for(let i = 0; i < max; i++){
        items += getproductCard(products[i].name, products[i].ingredients)
    }
    return `<h1>${gridName}</h1><div class="productGrid">${items}</div>`
}

function getproductPage(name, ingredients, price){
    let items = ""
    for(let i = 0; i < ingredients.length; i++){
        items += `<li>${ingredients[i]}</li>`
    }
    return `<h1>Pizza ${name}</h1>
    <div id="optionalProduct">
        <img src="style/resources/pizza/${name}.jpg">
        <div>
            <ul>
                ${items}
            </ul>
            <input id="buttonOrder" type="button" value="Order ${price}$" onclick="buttonOrder()">
        </div>
    </div>`
}