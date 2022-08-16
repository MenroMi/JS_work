const form = document.querySelector('form'),
      btn = document.querySelector("[data-btn]");

bindPostData(form, "http://localhost:3000/requests");

const postData = async (url, data) => {
    const result =  await fetch(url, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: data
    });

    return await result.json();
};

const getData = async (url) => {
    const res = await fetch(url);

    return res.json();
    
};


function bindPostData(data, url) {

    data.addEventListener('submit', (e) => {

        e.preventDefault();

        const formData = new FormData(data);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));


        postData(url, json);
        data.reset();

    });
}

getAllData(btn);

function getAllData(button) {

    button.addEventListener('click', (e) => {
        e.preventDefault();

        getData('http://localhost:3000/requests')
        .then(response => response.forEach(item => {
            console.log(item);
        }));

    });

}


