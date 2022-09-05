"use strict";

const log = function(a, b, ...nazwa) { // rest-operator
    console.log(a, b, nazwa); // powinna być taka sama nazwa operatora rest
};

log(1, 2, 3, 4, 5, 6); // 1 i 2 będą normalnie wyświetlały się w konsoli, reszta liczb
// będzie zawarta w massiwie

// ================

function calcOrDouble(numb, basis) { // DEFAULT PARAMETR

    basis = basis || 2; // taki syntax używany do ES6

    console.log(numb * basis);
}

// ==============

     
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);

// ====================


const randomObj = {
    shape: "square",
    width: "350px",
    height: "350px",

    giveInConsoleOurObj() {
        return `Our shape:${this.shape}, which have width: ${this.width} and height: ${this.height}`;
    }

};

console.log(randomObj.giveInConsoleOurObj());


const admin = {
    name: prompt('Имя?', ""),
    age: 38,
    entitlements: true,
};




function isAdmin() {

    return this.entitlements === true && this.name == "john"? console.log('its true') : console.log('wrong');

}

console.log(admin.name);
const john = isAdmin.call(admin);
const andy = isAdmin.call(admin);


