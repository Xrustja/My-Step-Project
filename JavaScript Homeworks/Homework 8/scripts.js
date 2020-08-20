document.addEventListener('DOMContentLoaded', () => {
        let input = document.getElementById('input');
        input.addEventListener('focus', getFocused);
        input.addEventListener('blur', lostFocus);

        function getFocused(event) {
            let input = event.currentTarget;
            const filter = document.getElementsByTagName('span')[0];
            const errorMessage = document.getElementsByTagName('div')[0];

            if (filter) {
                input.classList.remove('input-focus-border');
                input.classList.remove('change-text-color-while-blur');
            }
            if (errorMessage) {
                input.classList.remove('input-error-border');
                input.classList.remove('input-focus-border');
                errorMessage.remove();
            }
            input.classList.toggle('input-focus-border');
            input.value = '';
        }

        function lostFocus(event) {
            let input = event.currentTarget;
            let val = input.value;
            if (val > 0) {
                let filter = createHtmlData('span', `Текущая цена: $ ${val}`, 'filter');
                input.closest('label').before(filter);
                input.classList.toggle('change-text-color-while-blur');
                console.log(`Your filter = ${filter}`);
                let x = createHtmlData('button', `X`, 'close-field');
                x.addEventListener('click', () => {
                    filter.remove();
                    val = '';
                });

                filter.append(x);
            } else {
                input.classList.toggle('input-error-border');
                let message = createHtmlData('div', `Please enter correct price!!!`);
                input.closest('label').after(message);
            }
        }

        function createHtmlData(tag, text, className) {
            let newBlock = document.createElement(tag);
            newBlock.innerHTML = `${text}`;
            newBlock.classList.toggle(className);
            return newBlock;
        }
    }
);
