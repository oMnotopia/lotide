const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  return console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
};

const flatten = function(arr) {
  let flattenedArray = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let ele of item) {
        flattenedArray.push(ele);
      }
    } else {
      flattenedArray.push(item);
    }
  }
  assertArrayEqual(flattenedArray, [1, 2, 3, 4, 5, 6]);
};

flatten([1, 2, [3, 4], 5, [6]]);