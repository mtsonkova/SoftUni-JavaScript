function solvePasswordGenerator(arr) {
let text = arr[0] + arr[1];
let word = arr[2].toUpperCase();
let vowels = ['a', 'e', 'i', 'o', 'u'];
let counter = 0;
for(let i = 0; i < text.length; i++) {
    if(vowels.includes(text.charAt(i))) {
        if(counter < word.length) {
            text = text.replace(text.charAt(i), word.charAt(counter));
            counter++;
        }
        if(counter === word.length) {
            counter = 0;
        }
    }
}

let password = text.split('').reverse().join('');
console.log(`'Your generated password is ${password}`);
}

solvePasswordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )