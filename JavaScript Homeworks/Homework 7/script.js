let arr = ['hello', 'world', 'Kiev', 'Lviv', ['1', '2', '3', 'sea', 'user', 23]];

function buildList(arr) {
    let result = arr.map(function (elem) {
        return elem;
    });
    console.log(result);
    const rootEl = document.getElementById('arrToList');
    if (rootEl === null) {
        console.error(`404 Element not found.`);
        alert(`404 Element not found.`);
        return;
    }
    for (let i = 0; i < result.length; i++) {
        const rootLi = document.createElement('li');
        const subUl = document.createElement('ul');
        if (typeof (result[i]) == 'object') {
            rootLi.innerHTML = `Element is array or object, contains value inside:`;
            for (let j = 0; j < result[i].length; j++) {
                const subLi = document.createElement('li');
                subLi.innerHTML = result[i][j];
                subUl.append(subLi);
                rootLi.append(subUl);
            }
        } else {
            rootLi.innerHTML = result[i];
        }
        rootEl.append(rootLi);

    }
    clearPage();
}

buildList(arr);


function clearPage() {
    let i = 10;
    let timeLeft = setInterval(function () {
        if (i <= 5) {
            document.getElementById(`clearTime`).style.color = `red`;
        }
        document.getElementById(`clearTime`).innerHTML = i;
        if (i === 0) {
            clearInterval(timeLeft);
            document.write(`Page has been cleared!!!`);
        }
        i--;
    }, 1000);
}
