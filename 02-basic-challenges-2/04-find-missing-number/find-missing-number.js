function findMissingNumber(arr) {
  if (arr.length === 0) return 1;

  const n = arr.length + 1;
  const expectSum = (n * (n + 1)) / 2;

  /* for loop solution:
   let calculatedSum = 0;
   for (let i = 0; i < arr.length; i++) {
     calculatedSum += arr[i];
   return expectSum - calculatedSum;
   */

  // .reduce solution:
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectSum - actualSum;
}

module.exports = findMissingNumber;
