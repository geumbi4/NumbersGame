let computerNum = 0;
let inputArea = document.getElementById("input-area");
let playButton = document.getElementById("play-Button");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-Button");
let chanceArea = document.getElementById("chance-area");
let chance = 5;
let gameOver = false;
let history = [];

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
inputArea.addEventListener("focus", focusInput); 

function randomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log(computerNum);
}
function play() {
    let userValue = inputArea.value;

    if(userValue < 1 || userValue >100) {
        resultArea.textContent = "1~100사이의 값을 입력하세요";
        return;
    }
    if(history.includes(userValue)) {
        resultArea.textContent = "이전에 입력한 값입니다. 다른 값을 입력하세요.";
        return;
    }

    chance --;
    chanceArea.textContent = `남은 횟수 : ${chance}`

    if(userValue < computerNum) {
        resultArea.textContent = "UP!";
    }
    else if(userValue > computerNum) {
        resultArea.textContent = "DOWN!";
    }
    else {
        resultArea.textContent = "맞췄습니다!";
        gameOver = true;
    }
    history.push(userValue);

    if(chance<1) {
        gameOver = true;
    }
    if(gameOver == true) {
        playButton.disabled = true;
    }
}
function reset() {
    inputArea.value ="";
    randomNum();
}
function focusInput() {
    inputArea.value = "";
    console.log("포커스 실행됨")
}

randomNum();
