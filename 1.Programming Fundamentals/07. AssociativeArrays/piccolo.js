function piccolo(arr) {
    let parking = [];
    arr.forEach(line => {
        const[command, number] = line.split(', ');
        if(command === 'IN') {
            if(!parking.includes(number)) {
                parking.push(number);
            }
        } else if(command === "OUT") {
            if(parking.includes(number)) {
                let index = parking.indexOf(number);
                parking.splice(index, 1);
            }
        }
        
    });

    if(parking.length === 0) {
        console.log('Parking Lot is Empty');
       }
       else {
        let sorted = parking.sort((a, b) => a.localeCompare(b));
        console.log(sorted.join('\n'));
       }

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
    )