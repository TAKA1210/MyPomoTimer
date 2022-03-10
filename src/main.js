let SR = document.getElementById("Pomo_start");
let SP = document.getElementById("Pomo_stop");

//動作部
let pomo = 1500;
let timer_ID;

function start()
{
  Mypomo_start();
  timer_ID = setInterval(Mypomo_start,1000,pomo);
  SR.disabled = true;
}

function stop()
{
  window.clearInterval(timer_ID);
  SR.removeAttribute("disabled");
}

function Mypomo_start()
{
  let timer = document.querySelector("#timer");
  let hour = Math.floor(pomo/3600);
  let minu = Math.floor(pomo/60);
  let seco = pomo%60;

  if(Math.floor(hour/10) == 0) hour = '0'+hour;
  if(Math.floor(minu/10) == 0) minu = '0'+minu;
  if(Math.floor(seco/10) == 0) seco = '0'+seco;

  timer.textContent = hour + ':' + minu + ':' + seco;
  if(pomo <= 0)
  {
    nap_start();
  }
  pomo--;
}

function nap_start()
{

}
