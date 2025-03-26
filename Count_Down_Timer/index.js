let minutes = 0;
let seconds = 0;
let timerInterval = null;
let isRunning = false;

const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const timeElement = document.getElementById('time');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!isRunning) {
        minutes = parseInt(minutesInput.value) || 0;
        seconds = parseInt(secondsInput.value) || 0;
        timerInterval = setInterval(updateTimer, 1000);
        isRunning = true;
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function resetTimer() {
    minutes = 0;
    seconds = 0;
    timeElement.textContent = '00:00';
    pauseTimer();
}

function updateTimer() {
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else {
        clearInterval(timerInterval);
        alert('Time is up!');
    }
    timeElement.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}

