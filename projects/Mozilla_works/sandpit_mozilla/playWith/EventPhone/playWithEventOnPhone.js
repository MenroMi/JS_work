window.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('.box');
    
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
    });

    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();

    //     console.log('move');
    // });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });

});