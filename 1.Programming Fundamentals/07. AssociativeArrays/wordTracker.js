function solveWordTracker(array) {
    let wordsTracker = {};

    let searchedWords = array[0].split(' ');
    wordsTracker[searchedWords[0]] = 0;
    wordsTracker[searchedWords[1]] = 0;

    for (let i = 1; i < array.length; i++) {
        let word = array[i];
        if (wordsTracker.hasOwnProperty(word)) {
            wordsTracker[word]++;
        }
    }
    let entries = Object.entries(wordsTracker);
    for(let[word, counter] of entries) {
        console.log(`${word} -> ${counter}`);
    }
}

solveWordTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)