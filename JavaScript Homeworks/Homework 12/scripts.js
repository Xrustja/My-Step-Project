document.addEventListener('DOMContentLoaded', onReady);

function onReady() {
    let img = document.querySelectorAll('img');
    let i = 1;
    changeImg(img, i);
    timer();
}


function changeImg(img, i) {
    let Interval = setInterval(() => {
        img.forEach(el => el.classList.remove('visible'));
        img[i].classList.add('visible');
        i < img.length - 1 ? i++ : i = 0;
    }, 10000);

    const stopBtn = document.getElementById('stop-btn');
    stopBtn.onclick = function () {
        clearInterval(Interval);
        continueBtn.disabled = false;
    };

    const continueBtn = document.getElementById('continue-btn');
    continueBtn.onclick = function () {
        changeImg(img, i);
        continueBtn.disabled = true;
    };
}

function timer() {

    let sec = 9;
    setInterval(function () {
        if (sec === 0) {
            sec = 10;
        }
        document.getElementById(`clearTime`).innerHTML = sec;
        sec--;
    }, 1000);
}

