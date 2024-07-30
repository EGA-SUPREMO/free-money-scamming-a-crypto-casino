// ==UserScript==
// @name         FREE BEER
// @namespace    https://testtoshowskills.000webhostapp.com/
// @version      0.3
// @description  try to take over the world!
// @author       EGA SUPREMO
// @match        https://freebitco.in/?op=home*
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    try {
        var maximumWait = Math.floor(Math.random() * (18000 - 13000 + 1)) + 13000;;
        var minimumWait = 13000;
        var randomWait = Math.floor(Math.random() * (maximumWait - minimumWait + 1)) + minimumWait;

        await new Promise(r => setTimeout(r, randomWait));

        var button = document.getElementById('free_play_form_button');

        button.focus();
        button.click();

    } catch(e) {
        localStorage.bug_log = localStorage.bug_log + ',' + window.location.href.toString();
        localStorage.bug_log1 = window.location.href.toString();
    }
})();