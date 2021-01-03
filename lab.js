var mountains = [{ name: 'Kilimanjaro', height: 19341 }, { name: 'Everest', height: 29029 }, { name: 'Denali', height: 20310 }];
// const mountains : Mountain[] = []
function findNameOfTallestMountain(x) {
    if (x.length == 0) {
        return "";
    }
    var largestMountain = { name: '', height: 0 };
    for (var i = 0; i < x.length; i++) {
        if (x[i].height > largestMountain.height) {
            largestMountain = x[i];
        }
    }
    return largestMountain.name;
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
var products = [{ name: "Vuevue", price: 49.99 }, { name: "Moet", price: 44.99 }, { name: "Korbel", price: 15.99 }];
// const products : Product [] = [];
function calcAverageProductPrice(x) {
    if (x.length == 0) {
        console.log(0);
        return 0;
    }
    var totalProductPrice = 0;
    for (var i = 0; i < x.length; i++) {
        totalProductPrice += x[i].price;
    }
    var averageProductPrice = totalProductPrice / x.length;
    return averageProductPrice;
}
var averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
var inventory = [
    { product: { name: "motor", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1 }, quantity: 20 }
];
// const inventory : InventoryItem[] = [];
function calcInventoryValue(x) {
    if (x.length == 0) {
        console.log(0);
        return 0;
    }
    var totalInventoryValue = x.reduce(function (sum, x) { return sum + x.product.price * x.quantity; }, 0);
    return totalInventoryValue;
}
var inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
