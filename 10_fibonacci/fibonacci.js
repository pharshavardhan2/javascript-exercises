const fibonacci = function(num) {
  if (num <= 0 || Number(num) == NaN) return "OOPS";
  num = Number(num);
  let fibArr = [1, 1];
  for (let i = 2; i < num; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }
  return fibArr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
