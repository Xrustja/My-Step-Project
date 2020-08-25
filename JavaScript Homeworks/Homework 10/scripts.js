document.addEventListener('DOMContentLoaded', () => {
        let passwordIconShow = document.querySelectorAll('i.fas');
        console.log(passwordIconShow);
        let submit = document.getElementById('btn');
        console.log(submit);

        passwordIconShow.forEach((icon, index) => {
                console.log("Результат    " + icon.classList.contains('fa-eye'));
                icon.addEventListener('click', () => {

                        if (icon.classList.contains('fa-eye')) {
                            icon.classList.add('hidden');
                            let icon2 = document.createElement('i');
                            icon2.classList.add('fas');
                            icon2.classList.add('fa-eye-slash');
                            icon2.classList.add('icon-password');
                            icon.before(icon2);
                            let closestInput = icon2.previousElementSibling;
                            closestInput.setAttribute('type', 'text');

                            icon2.addEventListener('click', () => {
                                icon.classList.toggle('hidden');
                                icon2.remove();
                                let closestInput = icon.previousElementSibling;
                                closestInput.setAttribute('type', 'password');
                            })

                        }
                    }
                )
            }
        );

        submit.onclick = function comparePasswords(event) {
            event.preventDefault();
            let oldError = document.getElementById('error-container');
            if (oldError) {
                oldError.remove();
            }
            let pass1 = document.getElementById('input1');
            let pass2 = document.getElementById('input2');
            if (pass1.value === pass2.value) {

                alert('You are welcome!!!');
            } else {
                let error = document.createElement('div');
                error.classList.add('error-message');
                error.setAttribute('id', 'error-container');
                error.innerHTML = 'Нужно ввести одинаковые значения';
                submit.before(error);
            }
        }
    }
);