const form = document.querySelector("form");

const messages = {
    loading: 'Загрузка',
    done: 'Готово!',
    error: "Что-то не так!"
};

personData(form);

function personData(form) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const messageStatus = document.createElement('div');
        messageStatus.textContent = messages.loading;
        form.append(messageStatus);

        const xhr = new XMLHttpRequest(); // 6
        xhr.open('POST', ' http://localhost:3000/requests');
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        const formData = new FormData(form);

        // xhr.send(formData);

        // const obj = {};

        // formData.forEach(function(value, key) {
        //     obj[key] = value;
        // });
        // console.log(obj);

        // const json = JSON.stringify(obj);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        xhr.send(json);

        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                console.log(xhr.response);
                messageStatus.textContent = messages.done;
                // btn.textContent = 'Click another one';
                // btn.addEventListener('click', getData);
            } else { //14
                messageStatus.textContent = messages.error;

            }
        });
    
    });
}

// function getData() {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
        
//         const xhr = new XMLHttpRequest();

//         xhr.open('GET', 'site.php');
//         xhr.send();
    
//         xhr.addEventListener('load', () => {

//             if (xhr.status == 200) {
//                 document.body.append(xhr.response);
//             }
//         });

//     });
// }
