// ==UserScript==
// @name         Free beer
// @namespace    http://tampermonkey.net/
// @version      2024-02-20
// @description  try to take over the world!
// @author       You
// @match        https://freebitco.in/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // Generate a random delay between 5 to 15 seconds
    var delay = Math.floor(Math.random() * (10000 - 1000 + 1)) + 5000;

    setTimeout(function() {
        if(document.getElementById('free_play_form_button').offsetParent !== null) {
            var button = document.getElementById('free_play_form_button');
            button.focus();
            button.click();
        }
    }, delay);
})();
