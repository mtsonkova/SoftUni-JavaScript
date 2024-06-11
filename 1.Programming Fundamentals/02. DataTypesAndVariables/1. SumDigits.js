function solveSumOfDigits(num) {
    let result = num.toString()
        .split('')
        .reduce((a, b) => Number(a) + Number(b), 0);
    console.log(result);
}
solveSumOfDigits(245678);
solveSumOfDigits(97561);