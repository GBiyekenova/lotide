const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`⛔⛔⛔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`✅ ✅ ✅  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(words) {
  return words.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(words);
assertEqual(words.length, 3); // original array should still have 3 elements!