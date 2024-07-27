function solveReception(arr) {
    let firstEmployee = Number(arr[0]);
    let secondEmployee = Number(arr[1]);
    let thirdEmployee = Number(arr[2]);
    let visitors = Number(arr[3]);

    let numOfVisitorsPerHour = firstEmployee + secondEmployee + thirdEmployee;

    let hoursCounter = 0;

    for(let i = visitors; i > 0; i -= numOfVisitorsPerHour) {
        hoursCounter++

        if(hoursCounter % 4 === 0) {
            hoursCounter++;
        }
    }

    console.log(`Time needed: ${hoursCounter}h.`); 
}
solveReception(['5','6','4','20']); //2
solveReception(['1','2','3','45']); //10
solveReception(['3','2','5','40'])  //5