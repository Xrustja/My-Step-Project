let name = prompt("Enter your name");
let age = prompt("Enter your age");

while (name === null || age === null || name.trim() === '' || age.trim() === '' || isNaN(+age)) {
    name = prompt("Enter your name", name);
    age = prompt("Enter your age", age);
}
if (age < 18) {
    alert('You are not allowed to visit this website.');
} else if (age >= 18 && age <= 22) {
    if (confirm('Are you sure you want to continue?')) {
        alert('Welcome,' + name);
    } else {
        alert('You are not allowed to visit this website.');
    }
} else {
    alert('Welcome,' + name);
}

