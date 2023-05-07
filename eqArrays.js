const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return;

  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i], arr2[i]);
    if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i], arr2[i])) return false;
    }

    if (arr1[i] !== arr2[i] && !Array.isArray(arr1[i])) return false;
  }
  return true;
};

assertEqual(eqArrays([[[[2, 3], [["hi"]]]]], [[[[2, 3], [["hi"]]]]]), true); // => should PASS