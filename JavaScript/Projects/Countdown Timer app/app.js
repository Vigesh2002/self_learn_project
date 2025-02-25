let countdown;
let timeRemaining = 0;

function startTimer() {
    let input = document.getElementById("timeInput").value;
    if (input === "" || input <= 0) {
        alert("Please enter a valid number!");
        return;
    }

    if (timeRemaining === 0) {
        timeRemaining = parseInt(input);
    }

    clearInterval(countdown);
    countdown = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeRemaining <= 0) {
        clearInterval(countdown);
        document.getElementById("display").innerText = "00:00";
        alert("Time's up!");
        return;
    }

    timeRemaining--;
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    document.getElementById("display").innerText =
        (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function pauseTimer() {
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    document.getElementById("display").innerText = "00:00";
    document.getElementById("timeInput").value = "";
    timeRemaining = 0;
}
