function solveOddAndEvenSum(num) {
let arr = num.toString().split('');
let evenSum = arr.filter(digit => Number(digit) % 2 === 0).reduce((a, b) => Number(a) + Number(b), 0);
let oddSum = arr.filter(digit => Number(digit) % 2 !== 0).reduce((a, b) => Number(a) + Number(b), 0);
console.log(`Even sum  = ${evenSum}`);
console.log(`Odd sum = ${oddSum}`);
}

solveOddAndEvenSum(3495892137259234);