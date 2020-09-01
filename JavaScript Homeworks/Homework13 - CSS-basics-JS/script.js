document.addEventListener('DOMContentLoaded', onReady);

function onReady() {
    let link = document.querySelector('link[rel="stylesheet"]');
    let btn = document.getElementById('change-mode-btn');
    let localValue = localStorage.getItem('style');

    if (localValue === 'lightTheme'){
        link.setAttribute('href',"css/styles.css");
    } else{
        link.setAttribute('href',"css/styles-dark-mode.css");
    }

    btn.onclick = function () {
        link.setAttribute('href', link.getAttribute('href') === "css/styles.css" ? "css/styles-dark-mode.css" : "css/styles.css");
        let storageStyleValue;
        if (link.getAttribute('href') === "css/styles.css") {
            storageStyleValue = 'lightTheme';
        } else {
           storageStyleValue = 'darkTheme';
        }
        localStorage.setItem('style', storageStyleValue);
    };
}
