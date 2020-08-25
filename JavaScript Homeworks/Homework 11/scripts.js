document.addEventListener('keypress', (event) => {

    let code = event.code.replace('Key', '');
    let btn = document.querySelectorAll('button.btn');

    btn.forEach(btn => {
        if (btn.innerHTML === code) {
            btn.classList.add('highlight');
        } else {
            btn.classList.remove('highlight');
        }
    });
});

