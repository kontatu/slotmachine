const setTime = document.getElementById('setTime1');
const setTime2 = document.getElementById('setTime2');
const setTime3 = document.getElementById('setTime3');
const nowTime = document.getElementById('nowTime');
const nowTime2 = document.getElementById('nowTime2');
const nowTime3 = document.getElementById('nowTime3');
const nowTime4 = document.getElementById('nowTime4');
const nowTime5 = document.getElementById('nowTime5');
const nowTime6 = document.getElementById('nowTime6');
const nowTime7 = document.getElementById('nowTime7');
const nowTime8 = document.getElementById('nowTime8');
const nowTime9 = document.getElementById('nowTime9');
const startTimer = document.getElementById('startTimer');

// .1秒ごとに数字が切り替わる

let sec = 0, sec2 = 0, sec3 = 0, sec4 = 0;
nowTime.textContent = '0';
nowTime2.textContent = '0';
nowTime3.textContent = '0';
nowTime4.textContent = '9';
nowTime5.textContent = '9';
nowTime6.textContent = '9';
nowTime7.textContent = '1';
nowTime8.textContent = '1';
nowTime9.textContent = '1';

startTimer.addEventListener('click', function (def) {
    if (sec4 === 0) {
        sec4 += 1;
        count = setInterval('countUp()', 100);
        count2 = setInterval('countUp2()', 100);
        count3 = setInterval('countUp3()', 100);


    } else {
        alert('２回押さないでね');
    };
});

setTime.addEventListener('click', function () {
    if (sec4 === 1) {
        console.log(sec);
        if (sec === 0) {
            clearInterval(count);
            sec += 1;
            judgment();
        } else {
            alert('２回押さないでね');
        }
    } else {
        alert('スタートを押してね');
    }

});
setTime2.addEventListener('click', function () {
    if (sec4 === 1) {
        if (sec2 === 0) {
            clearInterval(count2);
            sec2 += 1;
            judgment();
        } else {
            alert('２回押さないでね');
        }
    } else {
        alert('スタートを押してね');
    }

});
setTime3.addEventListener('click', function () {
    if (sec4 === 1) {
        if (sec3 === 0) {
            clearInterval(count3);
            sec3 += 1;
            judgment();
        } else {
            alert('２回押さないでね');
        }
    } else {
        alert('スタートを押してね');
    }

});


let countNum = 0, countNum2 = 0, countNum3 = 0;
const countUp = function () {
    nowTime.textContent = countNum;
    if (countNum !== 0) {
        nowTime4.textContent = countNum - 1;
    } else {
        nowTime4.textContent = "9";
    }
    if (countNum !== 9) {
        nowTime7.textContent = countNum + 1;
    } else {
        nowTime7.textContent = "0";
    }
    if (countNum === 9) {
        countNum = -1;
    }
    countNum += 1;
};
const countUp2 = function () {
    nowTime2.textContent = countNum2;
    if (countNum2 !== 0) {
        nowTime5.textContent = countNum2 - 1;
    } else {
        nowTime5.textContent = "9";
    }
    if (countNum2 !== 9) {
        nowTime8.textContent = countNum2 + 1;
    } else {
        nowTime8.textContent = "0";
    }
    if (countNum2 === 9) {
        countNum2 = -1;
    }
    countNum2 += 1;
};
const countUp3 = function () {
    nowTime3.textContent = countNum3;
    if (countNum3 !== 0) {
        nowTime6.textContent = countNum3 - 1;
    } else {
        nowTime6.textContent = "9";
    }
    if (countNum3 !== 9) {
        nowTime9.textContent = countNum3 + 1;
    } else {
        nowTime9.textContent = "0";
    }
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
            sec4 = 0;
        } else {
            alert('ハズレー');
            sec = 0;
            sec2 = 0;
            sec3 = 0;
            sec4 = 0;
            console.log('ok')
        }
    }
};
