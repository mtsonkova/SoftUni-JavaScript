function solveDistinctArray(arr) {
    let modifiedArray = [];
   arr.forEach(element => {
        if(!modifiedArray.includes(element)) {
            modifiedArray.push(element);
        }
    });

    console.log(modifiedArray.join(' '));
} 
solveDistinctArray([1, 2, 3, 4]);
solveDistinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solveDistinctArray([20, 8, 12, 13, 4, 4, 8, 5]);