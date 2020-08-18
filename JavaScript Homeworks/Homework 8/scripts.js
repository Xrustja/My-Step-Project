document.addEventListener('DOMContentLoaded', () => {
        let input = document.getElementById('input');
        input.addEventListener('focus', getFocused);
        input.addEventListener('blur', lostFocus);

        function getFocused(event) {
            let input = event.currentTarget;
            input.classList.toggle('input-focus-border');
            const filter = document.getElementsByTagName('span')[0];
            if (filter !== undefined) {
                filter.remove();
            }
            const errorMessage = document.getElementsByTagName('div')[0];
            if (errorMessage !== undefined) {
                errorMessage.remove();
            }
            input.value = '';
        }

        function lostFocus(event) {
            let input = event.currentTarget;
            let val = input.value;
            if (val > 0) {
                let filter = document.createElement('span');
                filter.classList.toggle('filter');
                filter.innerHTML = `Текущая цена: $ ${val}`;
                input.closest('label').before(filter);
                input.classList.toggle('change-text-color-while-blur');
                console.log(`Your filter = ${filter}`);
                let x = document.createElement("button");
                x.addEventListener('click', () => {
                    filter.remove();
                    val = ''
                });
                x.classList.toggle('close-field');
                x.innerText = 'X';
                filter.append(x);
            } else {
                input.classList.toggle('input-error-border');
                let message = document.createElement('div');
                message.innerHTML = `Please enter correct price!!!`;
                input.closest('label').after(message);
            }
        }
    }
);