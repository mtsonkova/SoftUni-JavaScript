function solveLowerOrUpper(letter) {
let result = '';
if(letter === letter.toUpperCase()) {
    result = 'upper-case';
} else {
    result = 'lower-case';
}
console.log(result);
}
solveLowerOrUpper('L');
solveLowerOrUpper('m');
solveLowerOrUpper('2');