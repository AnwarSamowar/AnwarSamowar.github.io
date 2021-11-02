let viewport = document.getElementById("viewport").offsetWidth;
let slider = document.querySelector(".slider");
let slides = document.querySelectorAll('.slide'),

window.onload= function() {
    setInterval( slides, 500 );
}

$(document).ready(function(){

    $("#accordion1").accordion();
    $("#accordion2").accordion();

});