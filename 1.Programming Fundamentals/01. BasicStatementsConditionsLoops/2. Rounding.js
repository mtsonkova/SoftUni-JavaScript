function solveRounding(num, round) {
    if (round > 15) {
        round = 15;
    }
    let roundedNumber = num.toFixed(round);
    console.log(parseFloat(roundedNumber));
}

solveRounding(3.1415926535897932384626433832795,2);
solveRounding(10.5,3);