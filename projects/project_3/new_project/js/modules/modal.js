function modal() {
    // MODAL WINDOW

    const modalsOpen = document.querySelectorAll("[data-modal]"),
          modalWindow = document.querySelector('.modal');

    
    function closeWindow() {

        modalWindow.classList.remove('show');
        document.body.style.overflow = '';

    }

    function openWindow() {

        modalWindow.classList.add('show');
        document.body.style.overflow = 'hidden';
        // clearInterval(modalTimerId);

    }

    // const modalTimerId = setTimeout(openWindow, 1000); // when we want open modal window
    //after some time, and clear interval later

    modalsOpen.forEach(modal => {

        modal.addEventListener('click', openWindow);

    });

    modalWindow.addEventListener('click', (event) => {

        const target = event.target;
        if (target === modalWindow || target.getAttribute("data-close") == '') {closeWindow();}

    });

    document.addEventListener('keydown', (event) => { // modal window to close when push 'ESC'

        if (event.keyCode === 27 && modalWindow.classList.contains('show')) {closeWindow();} // unique code "esc" key 

    });

    function showModalByScroll() {

        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight ) {
            // można dodać -1 px w przypadku gdy nie pojawia się modalne okno
            openWindow();
            window.removeEventListener('scroll',showModalByScroll);
        }

        
    }
    
    window.addEventListener('scroll',showModalByScroll);


}

module.exports = modal;