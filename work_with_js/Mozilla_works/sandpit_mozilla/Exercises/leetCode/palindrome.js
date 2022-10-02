var isPalindrome = function(x) {
    
    if (x < 0) {
        return false;
    }

    let reverse = 0, // 1 // 12 // 121
        temp = x; // 12 // 1 // 0
    
    while(temp !== 0) {
        reverse = (reverse * 10) + (temp % 10);
        temp = Math.floor(temp/10);
    }

    return (reverse == x);
};

isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);
