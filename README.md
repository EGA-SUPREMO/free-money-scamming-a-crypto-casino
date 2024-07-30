# free-money-scamming-a-crypto-casino
* use that script to claim money from frebitco.in, ~6$/year

* it only works for freebitco.in, and for accounts that has already bet on the platform~~it couldnt be me~~, for new accounts, it will require a captcha, it isnt worth it the money to bet nor to resolve the captcha each time

* use taper monkey, the bot will click the claim button everytime the page is updated, no thing more, it will run on the background

* copy and paste `main script.js`, as its the most updated, and `free1.js` has features that main dont, but is outdated, the rest is trash

or from here:
```js
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
```
this comply with the terms of service of that scammy website, so dont get any funny ideas github :v
