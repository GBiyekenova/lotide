const without = function(arr1, arr2) {
  let newArr = arr1.slice(0);
  //console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    if (arr2.indexOf(newArr[i]) > -1) {
      newArr.splice(i, 1);
    }
  }
  console.log(newArr);
  return newArr;
};
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

