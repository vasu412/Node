function sumOfArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function evenArray(arr) {
  return arr.filter((x) => x / 2 === 0 && x);
}

function oddArray(arr) {
  return arr.filter((x) => x / 2 !== 0 && x);
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
  while (num-- > 0) {
    fac *= num;
  }
  return fac;
}

module.exports = {
  sumOfArray,
  evenArray,
  oddArray,
  sortedArray,
  isPrime,
  isOdd,
  factorial,
};
