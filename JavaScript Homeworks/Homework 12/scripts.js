document.addEventListener('DOMContentLoaded', onReady);

function onReady() {
    let img = document.querySelectorAll('img');
    let i = 1;
    let sec = 2;


    let imgInterval = setInterval(changeImg, 3000);
    let timerInterval = setInterval(timer, 1000);

    const stopBtn = document.getElementById('stop-btn');
    stopBtn.onclick = function () {
        clearInterval(imgInterval);
        clearInterval(timerInterval);
        continueBtn.disabled = false;
    };

    const continueBtn = document.getElementById('continue-btn');
    continueBtn.onclick = function () {
        document.getElementById(`clearTime`).innerHTML = '3';
        sec = 2;
        timerInterval = setInterval(timer, 1000);
        imgInterval = setInterval(changeImg, 3000);
        continueBtn.disabled = true;
    };

    function changeImg() {
        console.log('start i = ', i);
        img.forEach(el => el.classList.remove('visible'));
        img[i].classList.add('visible');
        console.log('Length = ', img.length);
        i < img.length - 1 ? i++ : i = 0;
        console.log('End i = ', i);
    }

    function timer() {
        if (sec === 0) {
            sec = 3;
        }
        document.getElementById(`clearTime`).innerHTML = sec;
        sec--;

    }
}

