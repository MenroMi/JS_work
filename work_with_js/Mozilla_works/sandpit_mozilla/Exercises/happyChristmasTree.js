function christmasTree(lines) {

    let res = '';

    for ( let i = 0; i <= lines; i++) {
        for (let j = 0; j < lines - i; j++) {
            res += " ";
        }

        for ( let j = 0;  j < 2 * i + 1; j++) {
            res += "*";
        }
    
        res += "\n";

    }

    return res;

}

console.log(christmasTree(7));