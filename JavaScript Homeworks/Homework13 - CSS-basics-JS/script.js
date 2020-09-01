document.addEventListener('DOMContentLoaded', onReady);

let link = document.querySelector('link[rel="stylesheet"]');
let localValue = localStorage.getItem('style');
if (localValue !== null) {
    link.setAttribute('href', localValue);
}

function onReady() {
    let btn = document.getElementById('change-mode-btn');
    btn.onclick = function () {
        link.setAttribute('href', link.getAttribute('href') === "css/styles.css" ? "css/styles-dark-mode.css" : "css/styles.css");
        let storageStyleValue = link.getAttribute('href');
        localStorage.setItem('style', storageStyleValue);
    };
}
