function removeDuplicates(arr) {
  // 'for loop' solution:
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

/* 'Set' solution:
  return [...new Set(arr)];
*/
module.exports = removeDuplicates;
