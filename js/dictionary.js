const dictionary = ["Bell Pepper", "Mozarella", "Peperoni", "Tomatoes", "BBQ Sauce",
    "Bergader Blue", "Al\'fredo Sauce", "Jalapeno", "Bacon", "Special sauce",
    "Chicken", "Pineapple", "Onion", "Curry sauce", "Ham",
    "Mushrooms", "Garlic Sauce", "Cucumbers", "Bavarian Sausages", "Parmesan", "Feta",
    "Cherry Tomatoes", "Spinach", "Cheddar", "Corn", "Tuna", "Olives"]

function translate(menu){
    for(let category of menu){
        for(let product of category.products){
            for(let i = 0; i < product.ingredients.length; i++){
                product.ingredients[i] = dictionary[parseInt(product.ingredients[i])]
            }
        }
    }
}

export {translate}