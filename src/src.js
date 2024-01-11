let timerDisplay = document.getElementById("timer");
let PauseCheckbox = document.getElementById("check");
let skipButton = document.getElementById("skip");
let pomotimeInput = document.getElementById("ptime");
let naptimeInput = document.getElementById("ntime");
let acceptButton = document.getElementById("accept");

/**初期設定 */
let isWorking = true;
let timeInterval;
let Remainings = settimer();
displaytime(Remainings);


/*　時間を一秒ずつ減らしていき，特定の条件で作業時間と休憩時間を切り替える */
function startTimer(inputtime) {
    Remainings = inputtime;

    timeInterval = setInterval(() => {
        displaytime(Remainings);
        if (Remainings-- <= 0) {
            alerting();
            isWorking = !isWorking;
            Remainings = settimer();
            
        }
    }, 1000);
    acceptButton.disabled = true;
}

function pauseTimer() {
    clearInterval(timeInterval);
    acceptButton.disabled = false;
}

function skipTimer() {
    alerting();
    isWorking = !isWorking;
    Remainings = settimer();
    displaytime(Remainings);
}

function settimer() {
    let settime;
    if (isWorking) settime = pomotimeInput.value * 60;
    else settime = naptimeInput.value * 60;
    return settime;
}

/* 時間の表示を時分秒にする */
function displaytime(sec) {
    let hour = Math.floor(sec / 3600);
    let minu = Math.floor(sec / 60);
    let seco = sec % 60;

    if (Math.floor(hour / 10) == 0) hour = '0' + hour;
    if (Math.floor(minu / 10) == 0) minu = '0' + minu;
    if (Math.floor(seco / 10) == 0) seco = '0' + seco;

    timerDisplay.textContent = hour + ':' + minu + ':' + seco;
}

/*alerting */
function alerting()
{
    if(isWorking)
                alert("作業終了");
            else
                alert("休憩終了");
}
/** チェックボックスを押したときに開始/停止を切り替える */
PauseCheckbox.addEventListener("change", () => {
    if (PauseCheckbox.checked) 
    {   
        if(Remainings == 0)
            alert("集中時間と休憩時間をどちらも埋めてください");
        else
            startTimer(Remainings);
    }
    else pauseTimer();
});

/** 設定を押したときに時間を設定する． */
acceptButton.addEventListener("click", () => {
    Remainings = settimer();
    displaytime(Remainings);

});

/** skipを押したときにタイマーをスキップする */
skipButton.addEventListener("click", () => {
    skipTimer();
});