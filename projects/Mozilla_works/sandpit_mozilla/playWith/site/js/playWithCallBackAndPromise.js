const obj = {
    apple: 2,
    grape: 4,
    bananas: 1
};

const formData = new FormData(obj);

// let item = prompt('What are you want?', 'friut or vegetable...'),
//     howMuch = prompt('How much?', 'say please...');


// checkAndCalc(obj, item, addNewItem);

// function findKey(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
// }

// function addNewItem(obj, item) {

//     let key = findKey(obj, obj[item]),
//         value = obj[item];

//     return {
//         [key]: value,
//     };
// }

// function checkAndCalc(object, key, addNewItem) {
//     setTimeout(() => {
//         alert('Hmm, wait a minute');
//         setTimeout(() => {

//             addNewItem(object, key);

//         }, 2000);

//     }, 1000);

// }

const jsonObj = {};
formData.forEach((value, key) => {
    jsonObj[key] = value;
});



fetch("site.php", {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(jsonObj),
}).then(response => response.text()).then(item => console.log(item));