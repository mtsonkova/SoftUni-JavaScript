function solveHouseParty(arr) {
    let guestList = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, ...command] = arr[i].split(' ');
        if (command.includes('not')) {
            if (guestList.includes(name)) {
                let nameIndex = guestList.indexOf(name);
                guestList.splice(nameIndex)
            }
            else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        }

    }

    console.log(guestList.join('\n'));

}

solveHouseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);

solveHouseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);
