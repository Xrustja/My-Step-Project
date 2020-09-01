document.addEventListener('DOMContentLoaded', onReady);

function onReady() {
    let img = document.querySelectorAll('img');
    console.log(`Before funCall =  ${img}`);
    changeImg(img);

}

function changeImg(img) {
    let i = 1;
    let Interval = setInterval(() => {
        img.forEach(el => el.classList.add('hidden'));
        img[i].classList.remove('hidden');
        i < img.length - 1 ? i++ : i = 0;
    }, 1000);

    const stopBtn = document.getElementById('stop-btn');
    stopBtn.onclick  = function () { clearInterval(Interval);
        continueBtn.disabled = false;};

    const continueBtn = document.getElementById('continue-btn');
    continueBtn.onclick = function () {changeImg(img);
        continueBtn.disabled = true;
    };

}

