class Contact{
    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

let button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('btn clicked');
});             