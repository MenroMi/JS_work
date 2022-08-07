
function breakCamelCase(str) {

    let res = ``;
    str.split('').map((l) => {l == l.toUpperCase() ? res += ` ${l}` : res += l;});

    console.log(res);

}

breakCamelCase("camelCase");