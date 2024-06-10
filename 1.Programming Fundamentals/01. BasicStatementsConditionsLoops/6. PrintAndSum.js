function solvePrintAndSum(firstNum, secondNum) {
    let result = '';
    let sum = 0;
    for(let i = firstNum; i<=secondNum; i++) {
        result += i + ' ';
        sum += i;
    }

    console.log(result);
    console.log('Sum: ' + sum);
}

solvePrintAndSum(5, 10);
solvePrintAndSum(0, 26);
solvePrintAndSum(50, 60);