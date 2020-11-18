function productCard(name, details){
    return `<div class="productCard">
    <img src=${name}>
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