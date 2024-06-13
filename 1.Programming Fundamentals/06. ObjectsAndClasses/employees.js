function soveEmployees(arr) {
    let employees = [];
    class Employee {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        let number = name.length;

        let employee = new Employee(name, number);
        employees.push(employee);
    }
    for (let employee of employees) {
        console.log(`Name: ${employee['name']} -- Personal Number: ${employee['number']}`);

    }
}

soveEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);