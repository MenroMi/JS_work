const form = document.querySelector("form"),
      div = document.querySelector("[maindiv]"),
      btn = document.querySelector('button');

personData(form);

function personData(form) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const xhr = new XMLHttpRequest();
    
        xhr.open('POST', "site.php");
        // xhr.setRequestHeader('content-type', "multipart/form-data");
        const formData = new FormData(form);
        
        xhr.send(formData);

        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                console.log(xhr.response);
                btn.textContent = 'Click another one';
                btn.addEventListener('click', getData);
            }
        });
    
    });
}

function getData() {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'site.php');
        xhr.send();
    
        xhr.addEventListener('load', () => {

            if (xhr.status == 200) {
                document.body.append(xhr.response);
            }
        });

    });
}
