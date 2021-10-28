
const eqObjects = function(object1, object2) {
  //1. same number of keys
  //2. every key-value pair match
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let obj1 = inspect(actual);
  let obj2 = inspect(expected);
  if (obj1 === obj2) {
    return console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔⛔⛔  Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 });