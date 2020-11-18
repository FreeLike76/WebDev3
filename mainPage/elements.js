export function getProductGrid(productArray, max = 0){
    let items = ""
    if(max == 0){
        max = productArray.length
    }
    for(let i = 0; i < max; i++){
        items += getProductCard(product[i].name, product[i].ingredients)
    }
    return `<h1>Menu</h1><div id="productGrid">${items}</div>`
}
export function getProductCard(name, details){
    return `<div class="productCard">
    <img src="styles/resources/pizza/${name}.png">
    <div>
        <p>${name}</p>
        <ul>
            <li>${details[0]}</li>
            <li>${details[1]}</li>
            <li>${details[2]}</li>
            <li>${details[3]}</li>
            <li>${details[4]}</li>
            <li>...</li>
        <ul>
    </div>
</div>`
}