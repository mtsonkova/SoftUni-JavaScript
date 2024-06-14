function solveFurniture(input) {
// >>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<count>[\d+])

let result = 'Bought furniture: '
let sum = 0;
for(const line of input) {
    let regex = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<count>[\d+])/g;
    let match = regex.exec(line);

    if(match) {
        result += `\n${match.groups.name}`;
        sum += (Number(match.groups.price) * Number(match.groups.count));
    }
}
console.log(result);
console.log(`Total money spend: ${sum.toFixed(2)}`);
}

solveFurniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
    ])