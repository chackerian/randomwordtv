// ==UserScript==
// @name         reloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change word for Random word learning
// @author       Nathan Chackerian
// @match        https://en.wiktionary.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

function learn(){
setInterval(function(){
$.ajax({
url: "https://en.wiktionary.org/wiki/Special:Random",
success: function(data){
document.body.innerHTML = "";
document.write(data);
}
});
console.log("ran");

},30000);
}
learn();
})();
