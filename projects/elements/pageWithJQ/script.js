import $ from 'jquery';

$(document).ready(function()  {
    
    const btn = $("#btn");
    
    function addActive() {
        btn.addClass('active');
        btn.off('mouseout', addActive);
    }

    function removeActive() {
        btn.removeClass('active');
    }


    btn.on('mouseenter', addActive);

    
    // btn.mouseenter(() => {
    //     btn.addClass('active');
    //     btn.mouseleave(() => {
    //         btn.removeClass('active');
    //     });
    // });
    
    console.log('hello');

    // const btn = $("#btn"); // document.querySelector("#btn"); 
    // console.log(btn);
    



});   // window.addEventListener("DOMContentLoaded", () => {});