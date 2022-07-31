"use strict";

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');


inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current1.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => { // так же есть = 'readystatechange'
        if (request.status === 200) { // в случае readystatechange стоит добавить - request.readyState === 4
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

});

// Обработчик change срабатывает, когда наш input выходит из фокуса
// Обработчик input срабатывает, когда каждый раз что-то вводится или удаляется