/*
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).
*/

function calculateRent(days) {

    let rentForDay = 40;
    let res = 0;


    if ( days < 3) {
        res = days * rentForDay;
    } else if (3 <= days && days <= 6) {
        res = (days * rentForDay) - 20;
    } else {
        res = (days * rentForDay) - 50;
    }

    return res;
}

console.log(calculateRent(8));

// ===============

// const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));