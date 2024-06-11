function solveAddAndSubtract(num1, num2, num3) {
    function add(firstNum, secondNum) {
        let result = firstNum + secondNum;
        return result;
    }

    let result = add(num1, num2);
    
    function subtract(arg1, arg2) {
        return arg1 - arg2;
    }

    let output = subtract(result, num3);
    console.log(output);

}

solveAddAndSubtract(23, 6, 10);