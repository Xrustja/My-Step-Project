function createNewUser(first_name, last_name) {
    const newUser = {
        getLogin: function () {
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        },
        setFirstName: function (name) {
            Object.defineProperty(
                this,
                "firstName",
                {
                    value: name,
                    writable: false,
                });
        },
        setLastName: function (last_name) {
            Object.defineProperty(
                this,
                "lastName",
                {
                    value: last_name,
                    writable: false,
                });
        }
    };
    Object.defineProperty(
        newUser,
        "firstName",
        {
            value: first_name,
            writable: false,
            configurable: true
        });
    Object.defineProperty(
        newUser,
        "lastName",
        {
            value: last_name,
            writable: false,
            configurable: true
        });
    return newUser;
}

let firstName = prompt('Enter your first name');
let secondName = prompt('Enter your second name');

const user = createNewUser(firstName, secondName);
console.log(user);
console.log('Your login :' + user.getLogin());


// Основное задание

// function createNewUser(first_name, last_name) {
//     return {
//         firstName: first_name || ' ',
//         lastName: last_name || ' ',
//         getLogin: function () {
//             return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase()
//         }
//     }
// }
//
// let firstName = prompt('Enter your first name');
// let secondName = prompt('Enter your second name');
//
// const user = createNewUser(firstName,secondName);
// console.log(user);
// console.log('Your login :' + user.getLogin());
