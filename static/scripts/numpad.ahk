FileName := A_Temp . "\ahk_numpad_emulator_will_close"

if FileExist(FileName)
{
    FileDelete %FileName%
    Goto ForceExit
}

#NoTrayIcon
Menu, Tray, Icon, calc.exe
Menu, Tray, Icon
Menu, Tray, Tip, Numpad Emulator

#SingleInstance Force
OnExit, ExitSub
return
ExitSub:
    if (A_ExitReason == "Single")
    {
        FileAppend,,%FileName%
    }
ForceExit:
ExitApp

j::Numpad1
k::Numpad2
l::Numpad3
u::Numpad4
i::Numpad5
o::Numpad6
7::Numpad7
8::Numpad8
9::Numpad9
0::Numpad0
