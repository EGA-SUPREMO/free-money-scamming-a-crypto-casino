#!/bin/bash

# fresh-money() {
#     timeSleep=58;

#     maximumTimes=4;
#     minimumTimes=16;
#     #randomTimes=$(($minimumTimes + $RANDOM % $maximumTimes))
#     randomTimes=${1-9999}
#     minimumSleep=1;
#     randomSleep=0;

#     for (( i = 0; i < $randomTimes; i++ )); do
#         echo '------------------------------------------------------------------------------------'
#         echo '                         ' $i ' | '  `date`
#         echo '------------------------------------------------------------------------------------'


#         nmcli networking on
#         echo 'internet activated'

#         echo 'sleeping '$randomSleep'm. zzzzzzzzzz'
#         sleep "$randomSleep"m;

#         chromium-browser --new-window 'https://freebitco.in/?op=home/'&

#         echo 'sleeping 127. zzzzzzzzzz'
#         sleep 127s;

#         echo '--------------------------------------------------------------------+---------------'
#         echo 'commiting genocide against chromium-browser, idc if theyre innocent | ' `date`
#         echo '--------------------------------------------------------------------+---------------'
        
#         /usr/bin/pkill --oldest --signal TERM -f chromium-browser

#         echo 'internet killed'
#         nmcli networking off
#         minimumSecondSleep=40
#         maximumSecondSleep=55
#         secondSleep=$(($minimumSecondSleep + $RANDOM % $maximumSecondSleep))
#         echo '---------------------------+--------------------------------------------------------'
#         echo '       sleeping 58m'"$secondSleep"'s. zzz |' `date`
#         echo '---------------------------+--------------------------------------------------------'
#         maximumSleep=50
#         maximumSleep=$(($minimumSleep + $RANDOM % $maximumSleep))
#         maximumSleep=$(($minimumSleep + $RANDOM % $maximumSleep))
#         maximumSleep=$(($minimumSleep + $RANDOM % $maximumSleep))
#         maximumSleep=$(($minimumSleep + $RANDOM % $maximumSleep))
#         randomSleep=$(($minimumSleep + $RANDOM % $maximumSleep))

#         cd 'Desktop'
#         # mv `ls -rt | tail -n 1` `date -d "`expr "$randomSleep" + "$timeSleep"` mins" +%R`
#         cd ..
#         cd 'Desktop'
#         mv `ls -rt | tail -n 1` `date -d "$timeSleep mins" +%R`
#         cd ..
#         sleep $timeSleep'm';
#         sleep $secondSleep's';

#     done
# }
