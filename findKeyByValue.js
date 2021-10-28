const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔⛔⛔  Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKeyByValue = function(shows, value) {
  let objKeys = Object.keys(shows);
  console.log(objKeys);
  for (let key of objKeys) {
    if (shows[key] === value) {
      return key;
    }
  }
  return undefined;
};

// TEST CODE
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);