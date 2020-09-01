document.addEventListener('DOMContentLoaded', onReady);

function onReady() {
    let img = document.querySelectorAll('img');
    console.log(`Before funCall =  ${img}`);
    changeImg(img);

}

function changeImg(img) {
    let i = 1;
    let Interval = setInterval(() => {
        // console.log('i new iteration =', i);
        img.forEach(el => el.classList.remove('fadeOut', 'fadeIn'));
        if (i === 0) {
            img[img.length-1].classList.add('fadeOut');
        } else {
            img[i - 1].classList.add('fadeOut');
        }
        img[i].classList.add('fadeIn');
        // console.log('i=', i);
        // console.log('i-1=', i - 1);
        i < img.length - 1 ? i++ : i = 0;
        // console.log('i after check= ', i);
    }, 2000);

    const stopBtn = document.getElementById('stop-btn');
    stopBtn.onclick = function () {
        clearInterval(Interval);
        continueBtn.disabled = false;
    };

    const continueBtn = document.getElementById('continue-btn');
    continueBtn.onclick = function () {
        changeImg(img);
        continueBtn.disabled = true;
    };

}

