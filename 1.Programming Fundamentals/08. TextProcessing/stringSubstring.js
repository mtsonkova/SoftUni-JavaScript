function solveStringSubstring(word, text) {
    let searchedText = text.toLowerCase();
   let searchedWord = word.toLowerCase();

    if(searchedText.includes(searchedWord)) {
        console.log(searchedWord);
    } else {
        console.log(`${searchedWord} not found`);
    }
}
solveStringSubstring('javascript',
'JavaScript is the best programming language'
);

solveStringSubstring('python',
'JavaScript is the best programming language'
)