// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
// return true;
// };

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


const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 1) {
    middle.push(array[(array.length - 1) / 2]);
    return middle;
  } else {
    middle.push((array[(array.length / 2) - 1]));
    middle.push(array[array.length / 2]);
    return middle;
  }
};

//Test Code
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

