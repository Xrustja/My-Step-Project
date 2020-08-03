function createNewUser(first_name, last_name) {
    const newUser = {
        firstName: first_name || ' ',
        lastName: last_name  || ' ',
        getLogin: function () {
            let login = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
            return login
        }
           }

    return newUser
}

let firstName = prompt('Enter your first name');
let secondName = prompt('Enter your second name');

const user = createNewUser(firstName,secondName);
console.log(user);
console.log('Your login :' + user.getLogin());