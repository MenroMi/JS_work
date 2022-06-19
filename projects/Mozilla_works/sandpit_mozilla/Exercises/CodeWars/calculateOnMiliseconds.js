/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

h = hours;
m = minutes;
s = seconds;

*/

function clock(h, m, s) {

    if ( h === 0 && m === 0 && s === 0 ) {
        return 0;
    } else {
        return ((h * 3600000) + (m * 60000) + (s * 1000));
    }
}

console.log(clock(1, 0, 1));