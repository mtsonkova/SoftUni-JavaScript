function solveAddAndSubtract(arr){
    let modifiedArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            modifiedArr.push(arr[i] + i);
        } else {
            modifiedArr.push(arr[i] - i);
        }
    }
    let sumArr = arr.reduce((a, b) => a + b, 0);
    let sumModifiedArr = modifiedArr.reduce((a, b) => a + b, 0);
    console.log(modifiedArr);
    console.log(sumArr);
    console.log(sumModifiedArr);
} 

solveAddAndSubtract([5, 15, 23, 56, 35]);