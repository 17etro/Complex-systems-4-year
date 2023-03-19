function kahanSum(inputArray) {
  let sum = 0.0;
  let c = 0.0;

  for (let i = 0; i < inputArray.length; i++) {
    y = inputArray[i] - c;
    t = sum + y;
    c = (t - sum) - y;
    sum = t;
  }
  
  return sum
}

module.exports = {
  kahanSum
}

// -tests

// // result --> 0.6000000000000001
// console.log(0.1 + 0.2 + 0.3);

// // result --> 0.6
// console.log(kahanSum([0.1, 0.2, 0.3]))