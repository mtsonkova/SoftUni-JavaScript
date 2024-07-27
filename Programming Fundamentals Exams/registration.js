function solveRegistration(arr) {
    let username = arr[0];  

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].includes('Registration')) {
            break;
        }

        let [command, ...rest] = arr[i].split(' ');
        if (command === 'Letters') {
            username = changeLetters(username, rest[0]);
            console.log(username);
        }

        if (command === 'Reverse') {
            let isValidIndexes = isValidBothIndexes(username, Number(rest[0]), Number(rest[1]))
            if (isValidIndexes) {
                let reversedSubstr = reverseSubstring(username, Number(rest[0]), Number(rest[1]));
                console.log(reversedSubstr);
            }
        }

        if (command === 'Substring') {
            if (username.includes(rest[0])) {
                username = username.split(rest[0]).join('');
                console.log(username);
            }

            else {
                console.log(`The username ${username} doesn't contain ${rest[0]}.`);
            }
        }

        if (command === 'Replace') {
            let character = rest[0];
            username = username.replaceAll(character, '-');
            console.log(username);
        }

        if (command === 'IsValid') {
            if (username.includes(rest[0])) {
                console.log('Valid username');
            } else {
                console.log(`${rest[0]} must be contained in your username.`);
            }
        }
    }

    //functions

    function changeLetters(username, param) {
        let result = '';
        if (param === 'Lower') {
            result = username.toLowerCase();
        };

        if (param === 'Upper') {
            result = username.toUpperCase();
        }

        return result;
    }

    function isValidBothIndexes(username, startIndex, endIndex) {
        let isValid = false;

        if (startIndex >= 0 && endIndex < username.length) {
            isValid = true;
        }

        return isValid;
    }

    function reverseSubstring(text, startIndex, endIndex) {
        let subStr = text.slice(startIndex, endIndex + 1);
        return subStr.split('').reverse().join('');

    }
}

solveRegistration(['John',
    'Letters Lower',
    'Substring SA',
    'IsValid @',
    'Registration']);

solveRegistration(['ThisIsSoftUni',
    'Reverse 1 3',
    'Replace S',
    'Substring hi',
    'Registration'
])
