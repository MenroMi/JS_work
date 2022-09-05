/*
In a small town the population is at the beginning of a year. 
The population regularly increases by per year and moreover new inhabitants per year come to live in the town. 
How many years does the town need to see its population greater or equal to inhabitants?
*/

function years(p0, percent, aug, p) {

    let res = 0;
    let nbYears = 0;

    while(res <= p) {
        
        if (res >= p0) {
            res = Math.trunc(res + res * (percent / 100) + aug);
        } else {
            res = Math.trunc(p0 + p0 * (percent / 100) + aug);
        }
        nbYears++;

    }

    return nbYears;
}

console.log(years(1000, 2, 50, 1214));


// =============

// function nbYear(p0, percent, aug, p) {
    
//     for (var years = 0; p0 < p; years++) {
//       p0 = Math.floor(p0 + p0 * percent / 100 + aug);
//     }
//     return years;
// }