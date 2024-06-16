
    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        if(n <= 0 || isNaN(n) || Number.isInteger(n) === false) {
            throw new TypeError('N must be an integer')
        }
        let result = [];
        for(let i = n; i <= this.length - 1; i++) {
            result.push(this[i]);
        }
        return result;
    }

    Array.prototype.take = function(n) {
        if(n <= 0 || isNaN(n) || Number.isInteger(n) === false) {
            throw new TypeError('N must be an integer')
        }
        let result = [];
        for(let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    }

    Array.prototype.sum = function() {
        let result = 0;
        for(let i = 0; i <= this.length - 1; i++) {
            result += Number(this[i]);      
        }
        
        return result;
    }

    Array.prototype.average = function() {
        let result = Number(this.sum()) / this.length;
        return result;
    }


    let arr = [23, 43, 3, 5, 1, 4, 6, 1, 9, 12, 76, 93, 21, 7, 9];//313
    console.log(arr.last());
    console.log(arr);
    console.log(arr.skip(2));
    console.log(arr.take(3));
    console.log(arr.sum());
    console.log(arr.average().toFixed(2));