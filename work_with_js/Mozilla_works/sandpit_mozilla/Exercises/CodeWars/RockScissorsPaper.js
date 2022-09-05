/*
Let's play! You have to return which player won! In case of a draw return Draw!.
*/

const rockScisPap = (p1, p2) => {

    if ( p1 === p2 ) { 
        return "Draw!";
    } else if (p1 === 'rock') {
        if ( p2 === 'scissors') {
            return "Player 1 Won";
        } else {
            return "Player 2 Won";
        }
    } else if ( p1 === 'scissors') {
        if ( p2 === "paper") {
            return "Player 1 Won";
        } else {
            return "Player 2 Won";
        }
    } else if ( p1 === 'paper') {
        if ( p2 === 'rock') {
            return "Player 1 Won";
        } else {
            return "Player 2 Won";
        }
    } else {
        return 'Draw!';
    }
};


console.log(rockScisPap('rock', 'rock'));

// =================


// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//       return "Player 1 won!";
//     }
//     else {
//       return "Player 2 won!";
//     }
//   };