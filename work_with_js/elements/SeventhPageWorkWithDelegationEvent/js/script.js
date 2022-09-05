// window.addEventListener('DOMContentLoaded', () => {

//     const div = document.querySelector('#first_id'),
//           btns = div.querySelectorAll('button');


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
    
window.addEventListener('DOMContentLoaded', () => {

    const div = document.querySelector('#first_id'),
          btns = div.querySelectorAll('button');

    
    
    function addBlackClass(i = 0) {
        if (!btns[i].classList.contains('black')) {
            btns[i].classList.add('black');
            setTimeout(() => {
                btns[i].classList.remove('black');
            }, 200);
        } else {
            setTimeout(() => {
                btns[i].classList.remove('black');
            }, 500);
        }
    }

    div.addEventListener('click', (e) => {

        const target = e.target;

        btns.forEach((btn, i) => {
            if (target == btn) {
                console.log(e.target);
                // console.log(btn);
                addBlackClass(i);
            }
        });
    });
    






});











//     function classBlack(i = 0) {

//         if (!btns[i].classList.contains('black')) {
//             btns[i].classList.add('black');
//             setTimeout(() => {btns[i].classList.remove('black');}, 100);
//         } else {
//             btns[i].classList.remove('black');
//             setTimeout(() => {btns[i].classList.add('black');}, 100);
//         }
    
//     }

//     div.addEventListener('click', (e) => {

//         const target = e.target;
        
//         btns.forEach((btn, i) => {
//             if ( target == btn) {
//                 classBlack(i);
//             }
//         });
//     });



// });