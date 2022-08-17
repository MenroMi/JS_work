const form = document.querySelector('form'),
      btn = document.querySelector('#secondBtn');

recieveForm(form);

function recieveForm(data) {

    data.addEventListener('submit', (e) => {
       
        e.preventDefault();

        const form = new FormData(data);

        const json = JSON.stringify(Object.fromEntries(form.entries()));

        fetch("http://localhost:3000/requests", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: json
        })
        .then(response => response.json())
        .then(response => console.log(response.name));
    });


}

getForm(btn);

function getForm(button) {

    button.addEventListener('click', (e) => {
        
        e.preventDefault();

        const xhr = new XMLHttpRequest();

        xhr.open("GET", "http://localhost:3000/requests");
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                console.log(JSON.parse(xhr.response));
            } else {
                console.error('HMMM');
            }
        });

    });



}