function solveKingJoserPyramid(base, increment) {
    let stepCounter = 0;
    let stones = 0;
    let marbles = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let stepArea = 0;
    let stepPerimeter = 0;
    let totalArea = 0;

    for (let i = base; i > 0; i -= 2) {
        stepCounter++;
        let current = i;
        if (i - 2 <= 0) {
            gold = current * current;
        } else {
            totalArea = current * current * increment;
            stepPerimeter = ((current * 4) - 4) * increment;
            stones += (totalArea - stepPerimeter);

            if (stepCounter % 5 === 0) {
                lapisLazuli += stepPerimeter;
            } else {
                marbles += stepPerimeter;
            }
        }

    }

    let finalHeight = Math.floor(stepCounter * increment);

    console.log(`Stoens required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marbles)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${finalHeight}`);



}

//solveKingJoserPyramid(11, 1);
//solveKingJoserPyramid(11, 0.75);
 //solveKingJoserPyramid(12, 1);
solveKingJoserPyramid(23, 0.5);