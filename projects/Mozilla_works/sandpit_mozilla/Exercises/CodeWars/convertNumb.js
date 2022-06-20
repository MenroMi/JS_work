/*
Convert number to reversed array of digits
*/

function convertNumb(n) {

    let res = [];
    let numbString = String(n).split('');
    
    for (let numb of numbString) {
        res.push(Number(numb));
    }

    return res.reverse();
}

console.log(convertNumb(35231));

// ========================

function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }