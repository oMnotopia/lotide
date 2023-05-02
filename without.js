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

const without = function(source, itemsToRemove) {
  const modifiedArray = source.filter(item => !itemsToRemove.includes(item));
  assertArrayEqual(modifiedArray, [3, 'Hello']);
};

without([1,2,3,'Hello'], [1,2]);