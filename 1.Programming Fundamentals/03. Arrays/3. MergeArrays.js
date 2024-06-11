function solveMergeArrays(arr1, arr2) {
    let mergedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            let current = Number(arr1[i]) + Number(arr2[i])
            mergedArray.push(current);
        } else {
            let text = arr1[i] + arr2[i];
            mergedArray.push(text);
        }
    }

    console.log(mergedArray.join(' - '));

}

solveMergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)