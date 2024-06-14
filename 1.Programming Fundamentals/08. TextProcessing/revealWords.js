function revealWords(words, text){
    let searchedWords = words.split(', ');
    let textArr = text.split(' ');
    for(let i = 0; i < searchedWords.length; i++) {
        let currentWord = searchedWords[i];
        for(let word of textArr) {
            if(word.length === currentWord.length && word.startsWith('*')) {
                let index = textArr.indexOf(word);
                textArr[index] = currentWord;
                break;
            }
        }
    }

    console.log(textArr.join(' '));

}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)