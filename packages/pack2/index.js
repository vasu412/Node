function sumOfArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function multiplicationOfArray(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
}

function evenArray(arr) {
  return arr.filter((x) => {
    if (x % 2 === 0) return x;
  });
}

function oddArray(arr) {
  return arr.filter((x) => {
    if (x % 2 !== 0) return x;
  });
}

function sortedArray(arr) {
  return arr.sort((a, b) => a - b);
}

function isPrime(num) {
  if (num <= 1) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function isOdd(num) {
  if (isPrime(num)) return false;
  return true;
}

function factorial(num) {
  var fac = 1;
  while (num > 0) {
    fac *= num;
    num--;
  }
  return fac;
}

function findMax() {
  return Math.max(...arguments);
}

function findMin() {
  return Math.min(...arguments);
}

module.exports = {
  sumOfArray,
  evenArray,
  oddArray,
  sortedArray,
  isPrime,
  isOdd,
  factorial,
  multiplicationOfArray,
  findMax,
  findMin,
};
