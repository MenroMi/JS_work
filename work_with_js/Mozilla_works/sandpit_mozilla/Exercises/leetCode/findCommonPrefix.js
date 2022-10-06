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
