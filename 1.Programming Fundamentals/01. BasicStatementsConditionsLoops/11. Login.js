function solveLogin(arr) {
    let userName = arr[0];
    let password = arr[0].split('').reverse().join('');
    let counter = 1;  
    let output = '';
    for(let i = 1; i < arr.length; i++) {
        let current = arr[i];
       if(current === password) {
        output = `User ${userName} logged in.`
        break;
       } else if(counter < 4) {
        console.log('Incorrect password. Try again.');
        counter++;
       } else {
        output = `User ${userName} blocked!`
        break;
       }
    }
    console.log(output);    
}

solveLogin(['sunny','rainy','cloudy','sunny','not sunny']);
solveLogin(['momo','omom']);
solveLogin(['Acer','login','go','let me in','recA']);