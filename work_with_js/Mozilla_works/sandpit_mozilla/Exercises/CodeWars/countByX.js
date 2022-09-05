// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).


function countNumbs(x, n) {

    let res = [];
    let pushArr = 0;

    while(res.length < n) {

        pushArr += x;
        res.push(pushArr);

    }

    return res;
}

console.log(countNumbs(2, 10));
