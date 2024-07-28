function solveBakertyShop(input) {
    let foodStore = {};
    let soldQty = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'Complete') {
            break;
        }

        let [command, qty, food] = input[i].split(' ');
        qty = Number(qty);

        if (command === 'Receive') {
            if (!Object.hasOwn(foodStore, food)) {
                foodStore[food] = qty;
            } else if (qty > 0) {
                foodStore[food] += qty;
            }
        }

        if (command === 'Sell') {
            if (!Object.hasOwn(foodStore, food)) {
                console.log(`You do not have any ${food}.`)
            } else {
                if(qty > foodStore[food]) {
                    console.log(`There aren't enough ${food}. You sold the last ${foodStore[food]} of them.`);
                    soldQty += qty;

                    delete foodStore[food];
                }

                if(qty <= foodStore[food]) {
                    foodStore[food] -= qty;
                    soldQty +=qty;
                    console.log(`You sold ${qty} ${food}.`);

                    if(foodStore[food] <= 0) {
                        delete foodStore[food];
                    }
                }
            }

        }
    }

    for(const [key, value] of Object.entries(foodStore)) {
        console.log(`${key}: ${value}`);
    }
    console.log(`All sold ${soldQty} goods`);
}

solveBakertyShop(['Receive 105 cookies',
    'Receive 10 donuts',
    'Sell 10 donuts',
    'Sell 1 bread',
    'Complete'
]);


solveBakertyShop(['Receive 10 muffins',
    'Receive 23 bagels',
    'Sell 5 muffins',
    'Sell 10 bagels',
    'Complete'
]);
