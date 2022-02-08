#include <iostream>
#include <queue>
#include <thread>
#include <string>
#include <unistd.h>

#include "pomoend.h"

using namespace std;

//一回の休憩時間を設定
#define nap 300

int main()
{
  //1Pomoの単位と，何Pomoするかを設定
  int pomo;
  string time_s;
  cout << "How Pomo:" ;
  cin >> pomo;
  cout << "Prease Tell Me 1 Pomo\n" << "ex.| 1h | 30m |"<<"1 Pomo = ";
  cin >> time_s;

  //入力されたPomo単位から，単位を取得(pomo_scale)
  //その後，単位を外した時間を取得(time)
  int size = time_s.size();
  char time_scale = time_s[size-1];
  if(time_scale == 'm' || time_scale == 'h')
    {time_s.pop_back();}
  int time = stoi(time_s);
  int displayTime = time;
  //Pomoの単位を設定(デフォルトでは "分")
  if(time_scale == 'h') time *= 3600;
  else {time *= 60; time_scale = 'm';}

  int Timer = 0;
  int nap_timer = 0;
  int pomo_counter = 0;
  static bool flag = true;
  static bool breaking = false;
  cout << "push s to exit,or push p to pause" << endl;
  cout << "1Pomo = " << displayTime << time_scale << endl;
  while(1)
  {
    sleep(1);
    view_timer(Timer++);
    //１Pomoが終了したら
    if(Timer > time)
    {
      pomo_counter++;
      pomo_1_end();
      Timer = 0;
      pomo--;

      //pomo数が0になったらPomoループを抜け出す．
      if(pomo <= 0)
      {
        break;
      }

      //休憩
      cout << "naptime" << endl;
      cout << "push s to exit,or push p to pause" << endl;
      nap_timer = nap;
      while(1)
      {
        string S;
        sleep(1);
        view_timer(nap_timer--);
        if(nap_timer <= 0)
        {
          pomo_nap_end();
          nap_timer = 0;
          flag = true;
          break;
        }
        if(user_input())
        {
          cout << "nap stopped. Going to Pomo." << endl;
          break;
        }
      }
    }
    if(user_input())
    {
      break;
    }

    if(flag) cout << "     ===== Pomo Remains:"<< pomo << " =====";
    flag = false;
  }
  cout << "\n\nPomo Cycle Ended!"<< endl;
  cout << "Got Pomo:" << pomo_counter << endl;
}
