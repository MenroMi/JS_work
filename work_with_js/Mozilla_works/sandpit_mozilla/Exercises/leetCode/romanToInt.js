function romanToInt(num) {
    const romanN = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let curr = 0,
        next = 0,
        res = 0;

    for(let i = 0; i < num.length; i++) {
        
        curr = romanN[num[i]];
        next = romanN[num[i+1]];

        curr < next ? res -= curr : res += curr;

    }

    return res;

}


romanToInt("IX");
romanToInt("III");
romanToInt("MCMXCIV");
romanToInt("LVIII");