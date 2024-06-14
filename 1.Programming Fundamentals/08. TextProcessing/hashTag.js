function solveHashTag(text) {
    text.split(' ')
    .filter(element => element.startsWith('#') && element.length > 1)
    .forEach(element => {
        console.log(element.slice(1));
    });
}

solveHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')