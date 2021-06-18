const setTime = document.getElementById('setTime1');
const nowTime = document.getElementById('nowTime');
const setTime2 = document.getElementById('setTime2');
const nowTime2 = document.getElementById('nowTime2');
const setTime3 = document.getElementById('setTime3');
const nowTime3 = document.getElementById('nowTime3');
const startTimer = document.getElementById('startTimer');

// .1秒ごとに数字が切り替わる

let sec = 0, sec2 = 0, sec3 = 0;
startTimer.addEventListener('click', function () {
    count = setInterval('countUp()', 500)
    count2 = setInterval('countUp2()', 500)
    count3 = setInterval('countUp3()', 500)
});
setTime.addEventListener('click', function () {
    if (sec === 0) {
        clearInterval(count);
        sec += 1;
        console.log(countNum);
        judgment();
    } else {
        alert('２回押さないでね')
    }
});
setTime2.addEventListener('click', function () {
    if (sec2 === 0) {
        clearInterval(count2);
        sec2 += 1;
        console.log(countNum2);
        judgment();
    } else {
        alert('２回押さないでね')
    }
});
setTime3.addEventListener('click', function () {
    if (sec3 === 0) {
        clearInterval(count3);
        sec3 += 1;
        console.log(countNum3);
        judgment();
    } else {
        alert('２回押さないでね')
    }
});

let countNum = 0, countNum2 = 0, countNum3 = 0;
const countUp = function () {
    nowTime.textContent = countNum;
    if (countNum === 9) {
        countNum = -1;
    }
    countNum += 1;
};
const countUp2 = function () {
    nowTime2.textContent = countNum2;
    if (countNum2 === 9) {
        countNum2 = -1;
    }
    countNum2 += 1;
};
const countUp3 = function () {
    nowTime3.textContent = countNum3;
    if (countNum3 === 9) {
        countNum3 = -1;
    }
    countNum3 += 1;
};

const judgment = function () {
    if (sec === 1 && sec2 === 1 && sec3 === 1) {
        if (countNum === countNum2 && countNum2 === countNum3) {
            alert('大当たりー');
            sec = 0;
            sec2 = 0;
            sec3 = 0;
        } else {
            alert('ハズレー');
            sec = 0;
            sec2 = 0;
            sec3 = 0;
        }
    }
};
