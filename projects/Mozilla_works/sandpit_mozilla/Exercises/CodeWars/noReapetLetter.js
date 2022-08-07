function noReapetLetter(s) {
    let res = [];
    const l = s.toLowerCase();
    if (s.length == 0 || +s) {
        return "None";
    } else {
        for ( let i = 0; i < s.length; i++) {
            let count = 0;
            for ( let k = 0; k < s.length; k++) {
                if (l[i] == l[k]) {
                    count++;
                }
            }
    
            if ( count == 1) {
                res.push(s[i]);
            }
        }
    }
    
    return res.length > 0 ? res[0] : 'None';
}

console.log(noReapetLetter('sTreSS'));

// ==========================

function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
}

console.log(firstNonRepeatingLetter('stress'));