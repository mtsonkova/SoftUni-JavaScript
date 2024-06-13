function solveSorting(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let newArr = [];
    let arrSize = sortedArr.length;
    for (let i = 0; i < arrSize; i++) {
        if (i % 2 === 0) {
            newArr.push(sortedArr.pop());
        } else {
            newArr.push(sortedArr.shift());
        }
    }

    console.log(newArr.join(' '));

}

solveSorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);