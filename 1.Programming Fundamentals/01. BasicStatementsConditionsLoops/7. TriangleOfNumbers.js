function solveTriangleOfNumbers(num) {
   
    for (let row = 1; row <= num; row++) {
        let output = '';
        for (let col = 1; col <= row; col++) {
            output += row + ' ';
        } 
        console.log(output);       
    }
    
}

solveTriangleOfNumbers(6);