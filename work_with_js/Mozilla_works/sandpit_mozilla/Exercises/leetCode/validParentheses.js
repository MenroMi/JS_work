function isValid(s) {
 
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
    
}

console.log(isValid("(]"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(){}}{"));


/*
    const characters = [/\(\)/g, /\[\]/g, /\{\}/g];

    for (let i = 0; i < 3; i++) {
        if(characters[i].test(str)) {
            return true;
        } else {
            continue;
        }
    }

    return false;
*/

/*
// const characters = ["()", "[]", "{}"];

let actuallyElems = '',
    arr = [];

for(let el of str) {
    if(actuallyElems.length < 2) {
        actuallyElems += el;
    }

    if (actuallyElems.length === 2) {

        switch(actuallyElems) {
            case "()":
                arr.push(true);
                break;
            case "[]":
                arr.push(true);
                break;
            case "{}":
                arr.push(true);
                break;
            default:
                arr.push(false);
                break;
        }

        actuallyElems = '';
    }
}

return arr.every(elm => elm === true);
*/