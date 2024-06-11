function solveMatrix(n) {
    for(let i = 0; i < n; i++) {
        printRow(n);
}
}

function printRow(n) {
    let result = '';
    for(let i = 0; i < n; i++) {
        result = n + ' ';
    }
    console.log(result);
}

solveMatrix(7);