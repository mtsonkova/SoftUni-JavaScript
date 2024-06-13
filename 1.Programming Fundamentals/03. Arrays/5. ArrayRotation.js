function solveArrayRotation(arr, num) {
    for(let i = 1; i <= num; i++) {
        arr.push(arr.shift());
    }

    console.log(arr.join(' '));

}

solveArrayRotation([51, 47, 32, 61, 21], 2);
solveArrayRotation([32, 21, 61, 1], 4);
solveArrayRotation([2, 4, 15, 31], 5);