function solveRounding(num, round) {
    if (round > 15) {
        round = 15;
    }
    let roundedNumber = num.toFixed(round);
    console.log(roundedNumber.parseFloat());
}