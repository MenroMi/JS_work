// 8 kyu : Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

const arrNumbs = [1, 2, 3, 4, 5, 6];

function findAverage(array) {
  let res = 0;
  if (array.length == 0) {
    return 0;
  } else {
    for (let key of array) {
      res += key;
    }
  }
  return res / array.length;
}


console.log(findAverage(arrNumbs));