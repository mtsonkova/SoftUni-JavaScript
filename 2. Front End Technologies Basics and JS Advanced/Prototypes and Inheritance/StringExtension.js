String.prototype.ensureStart = function(str) {
    
    if(this.startsWith(str) === false) {
       return str + this;
    } 
    return this.toString();
}

String.prototype.ensureEnd = function(str) {
    
    if(this.endsWidth(str) === false) {
        return this + str;
    }
    return this.toString();
}

String.prototype.isEmpty = function() {
    if(this.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

String.prototype.truncate = function(n) {
    let result = '';
    if(n <= 0 || isNaN(n) || Number.isInteger(n) === false) {
        throw new TypeError('N must be an integer')
    }
    if(this.length < n) {
        result = this;
    }

    if(this.length > n) {
        let string = this.substring(0, n-3);
        let spaceIndex = string.lastIndexOf(' ');
        if(spaceIndex === -1) {
            result = string.substring(0, n - 3) + '...';
        } else {
        result = string + '...';
        }
    }

    if(this.length > n && this.lastIndexOf(' ') === -1) {
        result = this.substring(0, n-3) + '...';
    }

    if(n < 4) {
        result = '.'.repeat(n);
    }
    return result.toString();
}
 
let str = 'my string';

console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));

  
