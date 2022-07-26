const log = function(a, b, ...nazwa) { // rest-operator
    console.log(a, b, nazwa); // powinna być taka sama nazwa operatora rest
};

log(1, 2, 3, 4, 5, 6); // 1 i 2 będą normalnie wyświetlały się w konsoli, reszta liczb
// będzie zawarta w massiwie

// ================

function calcOrDouble(numb, basis) {

    basis = basis || 2; // taki syntax używany do ES5

    console.log(numb * basis);
}