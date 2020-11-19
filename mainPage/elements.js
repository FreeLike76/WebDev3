export function GETproductCard(name, ingredients){
    let items = ""
    for(let i = 0; i < ingredients.length; i++){
        if(i == 5){
            items += `<li>...</li>`
            break;
        }
        items += `<li>${ingredients[i]}</li>`
    }
    return `<div class="productCard">
    <img src="styles/resources/pizza/${name}.jpg" alt="pizza img ${name}">
    <div>
        <p>Pizza ${name}</p>
        <ul>
            ${items}
        <ul>
    </div>
</div>`
}

export function GETproductGrid(gridName, productArray, max = 0){
    let items = ""
    if(max == 0){
        max = productArray.length
    }
    for(let i = 0; i < max; i++){
        items += GETproductCard(product[i].name, product[i].ingredients)
    }
    return `<h1>${gridName}</h1><div id="productGrid">${items}</div>`
}

export function GEToptionalProduct(name, ingredients, price){
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