function solveSearchForNums(arr1, arr2) {
    let newArr = arr1.slice(0, arr2[0]);
    for(let i = 1; i<= arr2[1]; i++) {
        newArr.shift();
    }
    let numOccurence = newArr.filter(num => num === arr2[2]);
    console.log(`Number ${arr2[2]} occurs ${numOccurence.length} times.`);    

}

solveSearchForNums([5, 2, 3, 4, 1, 6], [5, 2, 3]);