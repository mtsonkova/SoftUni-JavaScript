function solvePerfectNumber(num) {
    let sum = 0;
    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
            sum += i;
        }
    }

    if(sum === num) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

solvePerfectNumber(6);
solvePerfectNumber(28);
solvePerfectNumber(1236498);