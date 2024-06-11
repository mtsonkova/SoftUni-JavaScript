function solveCommonElements(arr1, arr2) {
    let result = '';
    arr1.forEach(element => {
        if (arr2.includes(element)) {
            console.log(element);
        }
    })
}

solveCommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);

solveCommonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
)
