const palindromes = function (str) {
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    while (!/^[a-z]$/.test(str[i])) i++;
    while (!/^[a-z]$/.test(str[j])) j--;
    if (str[i] !== str[j]) return false;
    return true;
  }
};

// Do not edit below this line
module.exports = palindromes;
