let startTime,
    currentTime,
    intervalId;

const timerEl = document.getElementById('timer');
const btn = {
    start: document.getElementById('start'),
    stop: document.getElementById('stop'),
    restart: document.getElementById('restart'),
};

function startTimer() {
    if (startTime) return;

    startTime = Date.now();

    intervalId = setInterval(() => {
        currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        timerEl.innerHTML = parseTime(elapsedTime);
    })
}

function stopTimer() {
    clearInterval(intervalId);
}

function restartTimer() {
    startTime = null;
    currentTime = null;
    clearInterval(intervalId);

    timerEl.innerHTML = '000:00';
}

function parseTime(time) {
    const ms = time % 1000;
    const sec = Math.floor(time / 1000);

    const msString = ms.toString().padStart(3, '0').slice(0, 2);
    const secString = sec.toString().padStart(3, '0');

    return `${secString}:${msString}`;
}

// Events
btn.start.addEventListener('click', () => startTimer());
btn.stop.addEventListener('click', () => stopTimer());
btn.restart.addEventListener('click', () => restartTimer());