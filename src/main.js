//グローバル変数の宣言
let pomo_remain = 0;
let pomo_time = 0;

//動作部
let setButton1 = document.getElementById("set_button");
let startButton = document.getElementById("Pomo_start");

setButton1.addEventListener("click",onButton);
startButton.addEventListener("click",Mypomo_start);

//関数ここから
/*
関数名:onButton
動作:
HTML上のボタン"set-Pomo"が押されたら，設定された値をMyPomo_init(pomo,scale)に引き渡す
入力:
*/
function onButton()
{
  let pomo;
  let scale;

  //pomoの設定
  pomo = document.getElementById("Pomo-select").value;
  scale = document.getElementById("scale-select").value;

  MyPomo_init(pomo,scale);
}
/*
関数名:MyPomo_init
動作:
入力のpomo,scaleを読み込んで，それぞれのidに対応する値を
グローバル変数 "pomo_remain","pomo_time"に入れる．
入力:pomo,scale
*/
function MyPomo_init(pomo,scale)
{
  //ポモの設定
  if(pomo == "pomo1") pomo_remain = 1;
  else if(pomo == "pomo2") pomo_remain = 2;
  else if(pomo == "pomo3") pomo_remain = 3;
  else if(pomo == "pomo4") pomo_remain = 4;
  //console.log(pomo_remain);

  //時間の設定
  if(scale == "15m") pomo_time = 15;
  else if(scale == "25m") pomo_time = 25;
  else if(scale == "30m") pomo_time = 30;
  else if(scale == "45m") pomo_time = 45;
  else if(scale == "1h") pomo_time = 60;
  else if(scale == "1.5h") pomo_time = 90;

  pomo_time *= 60;

  /*
  //デバッグ処理
  console.log(pomo_remain);
  console.log(pomo_time);
  */
}

function Mypomo_start()
{

}


//temp
/*
関数名:
動作:

入力:
*/
