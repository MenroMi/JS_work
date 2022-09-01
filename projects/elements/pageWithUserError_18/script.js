"use strict";

const obj = [
    {

        id: "box",
        tag: "div"

    }, 
    {

        id: "two",
        tag: ""

    }, 
    {

        id: "circle",
        tag: "span"

    }
];


// obj.forEach(o => {
//     console.log(o.tag);
// })

try {
    obj.forEach((o, i) => {

        const elem = document.createElement(o.tag);
        if (o.tag === '') throw new Error(`В данных под номером ${i+1} нет значения для создания тага`);


        elem.setAttribute("id", o.id); // (name, value);
        // if (!o.id) throw new SyntaxError(`В данных под номером ${i+1} нет уникального id`);

    
        document.body.append(elem);
    
    
    });
} catch(error) {
console.error(error);
}

console.log('normal');


// const error = new Error('something');
// console.log(error.name, error.message,error.stack);