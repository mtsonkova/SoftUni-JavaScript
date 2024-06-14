function solveCompanyUsers(arr) {
    let companies = {};
    arr.forEach(line => {
        const[companyName, id] = line.split(' -> ');
        if(!companies.hasOwnProperty(companyName)) {
            companies[companyName] = [id];            
        } else {
            if(companies[companyName].includes(id) === false) {
                companies[companyName].push(id);
            }            
        }
    });

   let entries = Object.entries(companies);
   let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));
    sorted.forEach(element => {
        const[key, value] = element;
        console.log(key);
        value.forEach(value => {
            console.log(`-- ${value}`);
        })
    })
}

solveCompanyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )