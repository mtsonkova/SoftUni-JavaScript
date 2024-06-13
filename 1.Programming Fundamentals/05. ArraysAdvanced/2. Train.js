function solveTrain(arr) {
    let currentArr = arr.slice(0);
    let train = currentArr[0].split(' ').map(Number);
    let capacity = Number(currentArr[1]);      
    
    for(let i = 2; i < currentArr.length; i++) {
        let num = 0;
        let line = currentArr[i];
        if(line.includes('Add')) {
            let tokens = line.split(' ');
            num = Number(tokens[1]);
            train.push(num);
        }

        num = Number(line);

        for(let j = 0; j < train.length; j++) {
            if(train[j] + num <= capacity) {
                train[j] += num;
                break;
            }
        }
    }

    console.log(train.join(' '));
} 

solveTrain(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'
]);

solveTrain(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
    ]);