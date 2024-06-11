function solveBitcoinMining(arr) {
    let totalAmountOfGold = 0;
    let dayCounter = 0;
    let money = 0;
    let pricePerBitcoin = 11949.16;
    let bitcoins = 0;
    let dayFirstBitCoinBought = 0;

    for (let i = 0; i < arr.length; i++) {
        dayCounter++;
        let currentGold = arr[i];
        if (dayCounter % 3 !== 0) {
            totalAmountOfGold += currentGold;
        } else {
            totalAmountOfGold += (currentGold * 0.7);
        }
        money = totalAmountOfGold * 67.51;


        if (money >= 11949.16) {
            money -= 11949.16;
            bitcoins++; 
            if(dayFirstBitCoinBought == 0) {
                dayFirstBitCoinBought = dayCounter;
            }
        }


    }

    let remainigMoney = 0;
    bitcoins = Math.ceil(money / pricePerBitcoin);
    if (bitcoins == 0) {
        remainigMoney = money;
        console.log('Bought bitcoins: ' + bitcoins);
        console.log('Left money: ' + remainigMoney.toFixed(2) + ' lv.');
    } else {
        remainigMoney = (totalAmountOfGold * 67.51) - (bitcoins * pricePerBitcoin);
        console.log('Bought bitcoins: ' + bitcoins);
        console.log('Day of the first purchased bitcoin: ' + dayFirstBitCoinBought);
        console.log('Left money: ' + remainigMoney.toFixed(2) + ' lv.');
    }




}

solveBitcoinMining([3124.15, 504.212, 2511.124]);
//solveBitcoinMining([50, 100]);
//solveBitcoinMining([100,200,300]);