// ==UserScript==
// @name         Wakanim skip intro and outro
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically skip intro and outro on Wakanim
// @author       Smallinger
// @match        https://www.wakanim.tv/*
// @updateURL    https://raw.githubusercontent.com/Smallinger/Wakanim-marathon/master/Wakanim-marathon.user.js
// @downloadURL  https://raw.githubusercontent.com/Smallinger/Wakanim-marathon/master/Wakanim-marathon.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function(){
        //Check if on watching
        var urlParts = window.location.href.split("/");
        if(urlParts.indexOf("episode") > -1){
            var introSkip = document.getElementsByClassName("PlayerSkip active")[0];
            if(typeof(introSkip) != "undefined"){
                console.log(introSkip);
                introSkip.children[0].click();
            }
        }
        //check if next Episode button active
        if(urlParts.indexOf("episode") > -1){
            var nextEpisode = document.getElementsByClassName("PlayerNextEp active")[0];
            if(typeof(nextEpisode) != "undefined"){
                console.log(nextEpisode.children[1].children[1])
                nextEpisode.children[1].children[1].click();
            }
        }
    }, 1000);
})();
