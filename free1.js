// ==UserScript==
// @name         FREE BEER
// @namespace    https://testtoshowskills.000webhostapp.com/
// @version      0.3
// @description  Si se queda sin puntos se jode
// @author       EGA SUPREMO
// @match        https://freebitco.in/?op=home*
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    try {
        var maximumWait = Math.floor(Math.random() * (25000 - 15000 + 1)) + 15000;;
        var minimumWait = 10000;
        var randomWait = Math.floor(Math.random() * (maximumWait - minimumWait + 1)) + minimumWait;

        await new Promise(r => setTimeout(r, randomWait));
        try {
            if (!document.getElementById('bonus_container_free_points') || !document.getElementById('bonus_container_fp_bonus')) {
                activePB();

                document.getElementsByClassName('free_play_link')[0].click();
            }
        } catch(ee) {
            localStorage.bug_log1 = localStorage.bug_log1 + " v.3\n" + ee;
            console.log(ee);
        }
        var button = document.getElementById('free_play_form_button');
        button.focus();
        button.click();

    } catch(e) {
        localStorage.bug_log = localStorage.bug_log + ',' + window.location.href.toString();
        localStorage.bug_log1 = window.location.href.toString();
    }

    function activePB() {
        var button = document.getElementsByClassName('rewards_link')[0];
        button.focus();
        button.click();

        var pointsleft = document.getElementsByClassName('reward_table_box br_0_0_5_5 user_reward_points font_bold')[0].textContent;

        pointsleft = parseFloat(pointsleft.replace(/,/g, ''));

        activeRPB(pointsleft);
        activeBPB(pointsleft);
    }

    function activeRPB(pointsleft) {
        if (pointsleft <= 1200 && !document.getElementById('bonus_container_free_points')) {
            RedeemRPProduct('free_points_50');
        }
        if (pointsleft <= 1200 || !!document.getElementById('bonus_container_free_points')) {
            return;
        }
        button = document.getElementsByClassName('reward_category_name')[5];

        button = document.getElementsByClassName('reward_link_redeem_button_style')[75];

        RedeemRPProduct('free_points_100');
    }

    function activeBPB(pointsleft) {
        if (pointsleft <= 4400 || !!document.getElementById('bonus_container_fp_bonus')) {
            return;
        }
        button = document.getElementsByClassName('reward_category_name')[3];

        button = document.getElementsByClassName('reward_link_redeem_button_style')[55];

        RedeemRPProduct('fp_bonus_1000');
    }
})();