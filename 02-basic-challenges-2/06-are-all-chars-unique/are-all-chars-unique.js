function areAllCharactersUnique(str) {
  //Using a Set solution:
  // This is the current character
  const charSet = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charSet.has(char)) {
      return false;
    }

    charSet.add(char);
  }

  return true;

  /* Using an object solution
  
  function areAllCharactersUnique(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      return false;
    }
    charCount[char] = true;
  }

  return true;
}*/
}

module.exports = areAllCharactersUnique;
