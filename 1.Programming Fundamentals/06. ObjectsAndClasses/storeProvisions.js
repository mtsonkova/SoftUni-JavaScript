function soveStoreProvisions(stock, delivery) {
    let store = {};
    for(let i = 1; i<stock.length; i+=2) {
        let productName = stock[i-1];
        let productQty = Number(stock[i]);
       
        if(!Object.hasOwn(store, productName)) {
            store[productName] = productQty;           
        } else {

           store[productName] += productQty;
        }
    }
    
    for(let i = 1; i<delivery.length; i+=2) {
        let productName = delivery[i-1];
        let productQty = Number(delivery[i]);
       
        if(!Object.hasOwn(store, productName)) {
            store[productName] = productQty;           
        } else {

           store[productName] += productQty;
        }
    }

    for(let[key, value] of Object.entries(store)) {
        console.log(`${key} -> ${value}`);
    }
}

soveStoreProvisions([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )