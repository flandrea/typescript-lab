interface Mountain {
    name: string,
    height: number
}

const mountains : Mountain[] = [{name: 'Kilimanjaro', height: 19341},{name: 'Everest', height: 29029},{name: 'Denali', height: 20310}];
// const mountains : Mountain[] = []

function findNameOfTallestMountain(x: Mountain[]) : string {
    if (x.length == 0) {
        return "";
    }
    let largestMountain : Mountain = { name : '', height : 0};
    for(let i = 0; i< x.length; i++){
        if(x[i].height >  largestMountain.height){
            largestMountain = x[i];
        } 
    }
    return largestMountain.name;
}
let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

interface Product {
    name: string,
    price: number
}

const products : Product [] = [{name: "Vuevue", price: 49.99},{name: "Moet", price: 44.99},{name: "Korbel", price: 15.99}];
// const products : Product [] = [];

function calcAverageProductPrice (x: Product[]) : number {
    if (x.length == 0) {
        console.log(0);
        return 0;
    }
    let totalProductPrice : number = 0;
    for(let i = 0; i < x.length; i++) {
        totalProductPrice += x[i].price;
    }
    let averageProductPrice: number = totalProductPrice/x.length
    return averageProductPrice;
}

let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);

interface InventoryItem {
    product: Product,
    quantity: number
}

const inventory : InventoryItem[] = [
    {product:{name:"motor", price: 10}, quantity: 10},
    {product:{name:"sensor", price: 12.50}, quantity: 4},
    {product:{name:"LED", price: 1}, quantity: 20}
];
// const inventory : InventoryItem[] = [];

function calcInventoryValue (x: InventoryItem[]): number {
    if (x.length == 0) {
        console.log(0);
        return 0;
    }
    let totalInventoryValue: number = x.reduce((sum,x) => sum + x.product.price * x.quantity, 0);
    return totalInventoryValue;
}

let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);