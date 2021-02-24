let csec = document.querySelector('#csec');
let sec = document.querySelector('#sec');
let min = document.querySelector('#min');
let clock = document.querySelector('.clock');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');
let split = document.querySelector('#split');
let clearLog = document.querySelector('#clearLog');
let logsList = document.querySelector('#logsList');
let csecNum = 0;
let secNum = 0;
let minNum = 0;
let interval;

timeStart = () => {
    csecNum++;

    if (csecNum < 10) {
        csec.innerHTML = `0${csecNum}`;
    }
    else if (csecNum < 100) {
        csec.innerHTML = csecNum;
    }
    else if (csecNum === 100) {
        secNum++;
        csecNum = 0;
        csec.innerHTML = `0${csecNum}`;
    }

    if (secNum < 10) {
        sec.innerHTML = `0${secNum}`;
    }
    else if (secNum < 60) {
        sec.innerHTML = secNum;
    }
    else if (secNum === 60) {
        minNum++;
        secNum = 0;
        sec.innerHTML = `0${secNum}`;
    }

    if (minNum < 10) {
        min.innerHTML = `0${minNum}`;
    }
    else if (minNum > 9) {
        min.innerHTML = minNum;
    }
}

start.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(timeStart, 10);
});

stop.addEventListener('click', () => {
    clearInterval(interval);
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    csecNum = 0;
    csec.innerHTML = '00';
    secNum = 0;
    sec.innerHTML = '00';
    minNum = 0;
    min.innerHTML = '00';
});

split.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = clock.innerText;
    logsList.append(li);
});

clearLog.addEventListener('click', () => {
    let lis = document.querySelectorAll('#logsList li');
    for (let li of lis) {
        li.remove();
    }
});
