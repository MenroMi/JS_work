window.addEventListener('DOMContentLoaded', () => {

    const div = document.querySelector('#first_id'),
          btns = div.querySelectorAll('button');


    // function addClassBlack() {

    //     btns.forEach((btn, i) => {

    //         btn[i].classList.add('black');

    //     });

    // }



    // btns[1].addEventListener('click', () => {

    //     if (!btns[1].classList.contains('black')) {
    //         btns[1].classList.add('black');
    //     } else {
    //         btns[1].classList.remove('black');
    //     }
    // });
    

    function classBlack(i = 0) {

        if (!btns[i].classList.contains('black')) {
            btns[i].classList.add('black');
        } else {
            btns[i].classList.remove('black');
        }
    
    }

    div.addEventListener('click', (e) => {

        const target = e.target;
        
        btns.forEach((btn, i) => {
            if ( target == btn) {
                classBlack(i);
            }
        });
    });



});