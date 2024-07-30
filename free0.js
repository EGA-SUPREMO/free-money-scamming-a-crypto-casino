// ==UserScript==
// @name         New Userscript
// @namespace    https://testtoshowskills.000webhostapp.com/
// @version      0.1
// @description  try to take over the world!
// @author       EGA SUPREMO
// @match        https://freebitco.in/?op=home
// @grant        window.close 
// ==/UserScript==

(async function() {
    'use strict';
    
    var maximumTimes = 16;
    var minimumTimes = 9;
    var randomTimes = Math.floor(Math.random() * (maximumTimes - minimumTimes + 1)) + minimumTimes;

    try {
        for (var currentTime = 0; currentTime < randomTimes; currentTime++) {

            var maximumTime = Math.floor(Math.random() * (6000000 - 27000 + 1)) + 27000;;
            var minimumTime = 17000;
            var randomTime = Math.floor(Math.random() * (maximumTime - minimumTime + 1)) + minimumTime;

            await new Promise(r => setTimeout(r, randomTime));

            var button = document.getElementById('free_play_form_button');

            console.log(currentTime);
            button.focus();
            button.click();
        }
    } catch(e) {
        localStorage.bug_log = localStorage.bug_log + ',' + window.location.href.toString();
        localStorage.bug_log1 = window.location.href.toString();
    }
    
})();