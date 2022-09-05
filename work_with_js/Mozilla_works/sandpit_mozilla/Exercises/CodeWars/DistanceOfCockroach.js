/*
Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
*/

function DistanceCockroach(speed) {

    return speed >= 0 ? Math.round((speed * 100000) / 3600) : speed; // we can find distance in cm per second 
    // 100000cm -> 1 km = 1000 m = 100000cm
    // 3600 -> 1 hour = 60 minutes = 3600 seconds
    // we convert 1 km in cm and speed in second, bacause exercise want have distance in cm/s

}

console.log(DistanceCockroach(0));

// =============

const cockroachSpeed = s => Math.floor(s / 0.036);