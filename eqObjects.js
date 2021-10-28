const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔⛔⛔  Assertion Failed: ${actual} !== ${expected}`);
  }
};


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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false