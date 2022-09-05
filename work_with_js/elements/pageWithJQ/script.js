import $ from 'jquery';

$(document).ready(function()  {
    
    // const btn = $("#btn");

    $(".list-item:first").hover(function() {
        $(this).toggleClass('active');
    });

    
    // btn.mouseenter(() => {
    //     btn.addClass('active');
    //     btn.mouseleave(() => {
    //         btn.removeClass('active');
    //     });
    // });

    $(".list-item:eq(2)").on('click', function() {
        $(".image:even").fadeToggle();
    });


    // const btn = $("#btn"); // document.querySelector("#btn"); 
    // console.log(btn);
    



});   // window.addEventListener("DOMContentLoaded", () => {});