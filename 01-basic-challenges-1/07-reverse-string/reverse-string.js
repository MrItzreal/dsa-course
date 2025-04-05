function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

/* 
built-in methods solution:
return str.split("").reverse().join("");

arrow function solution:
const reverseString = (str) => str.split("").reverse().join("");
*/

module.exports = reverseString;
