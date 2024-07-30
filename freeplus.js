// ==UserScript==
// @name         FREE BEER PLUS ULTRE
// @namespace    https://testtoshowskills.000webhostapp.com/
// @version      0.1
// @description  try to take over the world!
// @author       EGA SUPREMO
// @match        https://freebitco.in/?
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    try {
        var maximumWait = Math.floor(Math.random() * (25000 - 15000 + 1)) + 15000;;
        var minimumWait = 10000;
        var randomWait = Math.floor(Math.random() * (maximumWait - minimumWait + 1)) + minimumWait;

        await new Promise(r => setTimeout(r, randomWait));

        var button = document.getElementsByClassName('rewards_link')[0];
        tome(button);

        var pointsleft = document.getElementsByClassName('reward_table_box br_0_0_5_5 user_reward_points font_bold')[0].textContent;

        pointsleft = parseFloat(pointsleft.replace(/,/g, ''));

        button = document.getElementsByClassName('reward_category_name')[5];

        button = document.getElementsByClassName('reward_link_redeem_button_style')[75];

        button = document.getElementsByClassName('reward_category_name')[3];

        button = document.getElementsByClassName('reward_link_redeem_button_style')[55];


    } catch(e) {
        localStorage.bug_log = localStorage.bug_log + ',' + window.location.href.toString();
        localStorage.bug_log1 = window.location.href.toString();
    }
    function tome(you) {
        you.focus();
        you.click();
    }
})();