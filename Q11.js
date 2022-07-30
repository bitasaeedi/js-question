drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
]
n = drinks.length;

function SortByPrice(drink) {

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (drink[j].price > drink[j + 1].price) {
                let temp = drink[j];
                drink[j] = drink[j + 1];
                drink[j + 1] = temp;
            }
        }
    }
    return drink;
}
console.log(SortByPrice(drinks));






