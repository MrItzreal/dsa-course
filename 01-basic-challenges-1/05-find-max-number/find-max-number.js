function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = findMaxNumber;

/* .find solution:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findNumber = numbers.find((number) => number === 10);

console.log(findNumber)
*/

/* Math.max solution:

function findMaxNumber(arr) {
  return Math.max(...arr);
}
  */
