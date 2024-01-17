const repeatString = function(str, repetitionCount) {
  if (repetitionCount < 0) return 'ERROR';
  let result = "";
  for (let i = 0; i < repetitionCount; i++) {
    result += str;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
