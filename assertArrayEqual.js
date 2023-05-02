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

assertArrayEqual(['hello', 2, 3], ['hello', 2, 3]);
assertArrayEqual([1, 2, 3], ['1', 2, 3]);
assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([], [1, 2, 3]);