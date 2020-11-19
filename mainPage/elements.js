export function getProductGrid(gridName, productArray, max = 0){
    let items = ""
    if(max == 0){
        max = productArray.length
    }
    for(let i = 0; i < max; i++){
        items += getProductCard(product[i].name, product[i].ingredients)
    }
    return `<h1>${gridName}</h1><div id="productGrid">${items}</div>`
}
export function getProductCard(name, details){
    let items = ""
    for(let i = 0; i < details.length; i++){
        if(i == 5){
            items += `<li>...</li>`
            break;
        }
        items += `<li>${details[i]}</li>`
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