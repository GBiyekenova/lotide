const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(`Assertion failed: ${arr1} !== ${arr2}`);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`Assertion failed: ${arr1} !== ${arr2}`);
    }
  }
  console.log(`Assertion passed: ${arr1} === ${arr2}`);
};

module.exports = assertArraysEqual;
