#include "pomoend.h"
#include<iostream>
#include<string>
#include <conio.h>

void pomo_1_end()
{
  std::cout << "\n1 Pomo Ended!" << std::endl;
}
void pomo_nap_end()
{
  std::cout << "nap Ended!" << std::endl;
}
void view_timer(int Timer)
{
  int Hour = (Timer/3600)%60;
  int Minuts = (Timer/60)%60;
  int Second = Timer%60;

  std::cout <<"\r";
  if(Hour <= 0) std::cout << "00";
  else if (Hour < 10) std::cout << "0" << Hour;
  else std::cout << Hour;

  std::cout << ":";

  if(Minuts <= 0) std::cout << "00";
  else if (Minuts < 10 ) std::cout << "0" << Minuts;
  else std::cout << Minuts;

  std::cout << ":";

  if(Second <= 0) std::cout << "00";
  else if (Second < 10) std::cout << "0" << Second;
  else std::cout << Second;

  std::cout << std::string(30,' ');
}

bool user_input(){
  //ユーザの入力があった場合に動作
  if(kbhit())
  {
    char tmp = getch();
    //sが入力されたら終了
    if(tmp == 's')
    {
      return true;
    }
    //pが入力されたら一時停止
    if(tmp == 'p')
    {
      std::cout << "\r\n" <<"Pause...Push any button to restart";
      if(getch())
      {
        return false;
      }
    }
  }
  return false;
}
