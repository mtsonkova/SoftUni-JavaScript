function solveArrayModifier(input) {
    let arr = input[0].split(' ');
    for (let i = 1; i < input.length; i++) {
        if (input[i].includes('end')) {
            break;
        }
        if (input[i].includes('decrease')) {
            arr = arr.map((el) => el -= 1);
        } else {
            let [command, startIndex, endIndex] = input[i].split(' ');

            if (command === 'swap') {
                let firstNum = arr[startIndex];
                let secondNum = arr[endIndex];

                arr[startIndex] = secondNum;
                arr[endIndex] = firstNum;
            };

            if (command === 'multiply') {
                arr[startIndex] *= arr[endIndex];
            }
        }
    }
    console.log(arr.join(', '));
}

solveArrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)