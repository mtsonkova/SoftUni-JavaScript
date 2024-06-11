function findSmallestOf3Nums(num1, num2, num3) {
    let smallestNum = Math.min(Math.min(num1, num2), num3);
    console.log(smallestNum);
}

findSmallestOf3Nums(2, 5, 3);
findSmallestOf3Nums(600, 342, 123);