function solveSortArray(arr) {
    let sortedArray = arr.sort((a, b) =>
        (a.length - b.length) || a.localeCompare(b));
    console.log(sortedArray.join('\n'));
}

//solveSortArray(["alpha", "beta", "gamma"]);
solveSortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);