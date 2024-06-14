function solveOddOccurences(str) {
    let words = str.toLowerCase().split(' ');
    let myMap = new Map();
    words.forEach(element => {
        if(!myMap.has(element)) {
            myMap.set(element, 0);
        }
        myMap.set(element, myMap.get(element) + 1);
    });
    
    let filteredArr = Array.from(myMap.keys())
    .filter(x => myMap.get(x) % 2 !== 0) 
    .join(' ');

    console.log(filteredArr);

}

solveOddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');