function solveNumbers(input) {
    let arr = input.split(' ').map(el => Number(el));
    let avgNum = arr.reduce((a, b) => a + b, 0) / arr.length;
    let greaterNums = arr.filter((num) => num > avgNum);
    greaterNums = greaterNums.sort((a, b)=> b - a);
    if(greaterNums.length > 5) {
        greaterNums = greaterNums.slice(0, 5);        
    }
   if(greaterNums.length === 0) {
    console.log('No')
   } else {
    console.log(greaterNums.join(' '));
   }
}

solveNumbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solveNumbers('1');
solveNumbers('-1 -2 -3 -4 -5 -6')