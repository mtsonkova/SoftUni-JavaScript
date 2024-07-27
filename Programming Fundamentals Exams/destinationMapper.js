function solveDestinationMapper(input) {
    let regExp = /(=[A-Za-z]{3,}=)|(\/[A-Za-z]{3,}\/)/g;
    let result = input.match(regExp);

    if(result === null) {
        console.log('Destinations: \nTravel Points: 0');
    } else {
        result = result.map(element => element.slice(1, element.length-1));
        let travelPoints = result.reduce((a, b) => a.length + b.length);
        let destinations = result.join(', ');
        console.log(`Destinations: ${destinations}\nTravel Points: ${travelPoints}`);
    }   
}

solveDestinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i');
solveDestinationMapper('ThisIs some InvalidInput');