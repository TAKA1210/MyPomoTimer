let SR = document.getElementById("Pomo_start");
let SP = document.getElementById("Pomo_stop");

//動作部
let pomo = 15;
let ntime = 10;
let timer_ID;
let PorN = false;

function start()
{
  if(PorN == false)
  {
    Mypomo_start();
    timer_ID = setInterval(Mypomo_start,1000,pomo);
    SR.disabled = true;
  }
  else if(PorN == true)
  {
    nap_start();
    nap_ID = setInterval(nap_start,1000,300);
  }
}

function stop()
{
  if(PorN == false) window.clearInterval(timer_ID);
  else window.clearInterval(nap_ID);
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
    SR.removeAttribute("disabled");
    window.clearInterval(timer_ID);
    PorN = true;
  }
  pomo--;
}

function nap_start()
{
  let timer = document.querySelector("#timer");
  let hour = Math.floor(ntime/3600);
  let minu = Math.floor(ntime/60);
  let seco = ntime%60;

  if(Math.floor(hour/10) == 0) hour = '0'+hour;
  if(Math.floor(minu/10) == 0) minu = '0'+minu;
  if(Math.floor(seco/10) == 0) seco = '0'+seco;
  timer.textContent = hour + ':' + minu + ':' + seco;
  if(ntime <= 0)
  {
    SR.removeAttribute("disable");
    window.clearInterval(nap_ID);
    PorN = false;
  }
  ntime--;
}
