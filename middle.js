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
module.exports = middle;