/*初期化*/
let pomo = 1500;
let pomotime = 1500;
let naptime = 300;
let start;
let nap = false;

let timer = document.getElementById("timer");
/*動作部*/
displaytime(pomo);
const PPbutton = document.getElementById("check");
PPbutton.checked = false;
const buttonListen = PPbutton.addEventListener("click", () => {
  if (PPbutton.checked) {
    start = setInterval(checked, 1000);
  } else {
    clearInterval(start);
  }
});

/*スキップ部*/
const skipbutton = document.getElementById("skip");
skipbutton.addEventListener("click", () => {
  if (PPbutton.checked) {
    alert("タイマーを停止させてください");
  } else {
    nap = false;
    pomo = pomotime;
    PPbutton.checked = false;
    checked();
  }
});

/*時間データの入力*/
const formbutton = document.getElementById("accept");
formbutton.addEventListener("click", () => {
  if (PPbutton.checked) {
    alert("タイマーを停止させてください");
  } else {
    pomotime = document.getElementById("ptime")*60;
    naptime = document.getElementById("ntime")*60;
  }
});

/*関数部*/
//checkがされている間，タイマーを続ける
function checked() {
  pomo--;
  displaytime(pomo);
  if (pomo <= 0 && PPbutton.checked == true && nap == false) {
    clearInterval(start);
    PPbutton.checked = false;
    pomo = naptime;
    nap = true;
    //UI
    audioPlay();
    document.getElementById('timer').style.backgroundColor = '#FFFF0F';
    displaytime(pomo);
    alert('作業終了');
  }

  if (pomo <= 0 && PPbutton.checked == true && nap == true) {
    clearInterval(start);
    PPbutton.checked = false;
    pomo = pomotime;
    nap = false;
    //UI
    audioPlay();
    document.getElementById('timer').style.backgroundColor = '#FFFFF0';
    displaytime(pomo);
    alert('休憩終了');
  }
  console.log(nap);
}

function displaytime(pomo) {
  let hour = Math.floor(pomo / 3600);
  let minu = Math.floor(pomo / 60);
  let seco = pomo % 60;

  if (Math.floor(hour / 10) == 0) hour = '0' + hour;
  if (Math.floor(minu / 10) == 0) minu = '0' + minu;
  if (Math.floor(seco / 10) == 0) seco = '0' + seco;

  timer.textContent = hour + ':' + minu + ':' + seco;
}

function audioPlay() {
  /*UI*/
  audio = new Audio();
  audio.src = 'media/tuuti.mp3';
  audio.play();
}