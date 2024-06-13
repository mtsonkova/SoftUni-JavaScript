function solveMaxNumber(arr) {
    let arrMaxNums = [];
    let current = 0;
    let maxNum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        maxNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            current = arr[j];
            if (maxNum < current) {
                maxNum = current;
            }
        }
        if (!arrMaxNums.includes(maxNum)) {
            arrMaxNums.push(maxNum);
        }
    }
    if(!arrMaxNums.includes(arr[arr.length-1])) {
        arrMaxNums.push(arr[arr.length-1]);
    }
    console.log(arrMaxNums);

}


function solveMaxNumber2(arr) {
    let currentArr = arr.slice(0);       
    let arrMaxNums = [];
    let maxNum = 0;
    while(currentArr.length > 0) {
     maxNum = Math.max(...currentArr);
     if(arrMaxNums.includes(maxNum) === false) {
        arrMaxNums.push(maxNum);
     }
    
    let index = currentArr.indexOf(maxNum) + 1;
    currentArr = currentArr.splice(index);
    }

    console.log(arrMaxNums.join(' '));
}

solveMaxNumber2([14, 24, 3, 19, 15, 17]);
solveMaxNumber2([1, 4, 3, 2]);
solveMaxNumber2([41, 41, 34, 20]);
solveMaxNumber2([27, 19, 42, 2, 13, 45, 48])