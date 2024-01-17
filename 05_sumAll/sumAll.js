const sumAll = function(lowNum, highNum) {
  if (lowNum < 0 || highNum < 0 || typeof lowNum != "number" || 
     typeof highNum != "number") return "ERROR";
  if (lowNum > highNum) {
    temp = highNum;
    highNum = lowNum;
    lowNum = temp;
  }
  let sum = 0;
  for (let i = lowNum; i <= highNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
