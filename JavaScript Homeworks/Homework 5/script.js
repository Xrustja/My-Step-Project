function createNewUser(first_name, last_name, birthday) {
    const birthDay = new Date(birthday);
    const yy = (birthDay.getFullYear());
    const yyNow = ((new Date).getFullYear());
    const mm = (birthDay.getMonth()) + 1;
    const mmNow = ((new Date).getMonth()) + 1;
    const dd = (birthDay.getDate());
    const ddNow = ((new Date).getDate());

    return {
        firstName: first_name || ' ',
        lastName: last_name || ' ',
        birthday: new Date(birthday),
        getLogin: function () {
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase()
        },
        getAge: function () {
            let age;
            if (mmNow > mm || (mmNow === mm && ddNow >= dd)) {
                age = yyNow - yy;
            } else {
                age = yyNow - yy - 1;
            }
            return age;
        },
        getPassword: function () {
            return this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + yy;
        }
    }
}

let firstName = prompt('Enter your first name');
let secondName = prompt('Enter your second name');
let birthday = prompt('Enter your date of birth mm.dd.yyyy');


const user = createNewUser(firstName, secondName, birthday);
console.log(user);
console.log(`Your age : ${user.getAge()}`);
console.log(`Your password : ${user.getPassword()}`);
