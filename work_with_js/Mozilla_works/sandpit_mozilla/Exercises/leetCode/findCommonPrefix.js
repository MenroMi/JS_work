function longestCommonPrefix(strs) {

    let prefix = ''

    const firstString = strs[0];
    for (let i = 0; i < firstString.length; i++) {
        for (const s of strs) {
            if (s[i] !== firstString[i]) {
                return prefix
            }
        }
        prefix += firstString[i]
    }
    
    return prefix

}

longestCommonPrefix(["flower","flow", "floweewqreerw", "flight", "floweewqreerw"]);
longestCommonPrefix(["dog","racecar","car"]);
longestCommonPrefix(['a']);
longestCommonPrefix(['']);

/*

arr.forEach((el, i) => {
    for(let k = 0; k < el.length; k++) {
        if(i >= 1) {
            if(prefix[k] === el[k]) {
                res = prefix.slice(0, k+1);
            } else {
                prefix = el;
                break;
            }
        } else if (arr.length <= 1) {
            res += el[k];
        } else {            
            prefix += el[k];
        }
    }   
})

*/
