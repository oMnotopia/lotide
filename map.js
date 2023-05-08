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

const map = (arr, callback) => {
  const resultingArr = [];

  for (const item of arr) {
    resultingArr.push(callback(item));
  }

  return resultingArr;
};

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, () => words[0]);

assertArrayEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArrayEqual(results2, ["ground", "ground", "ground", "ground", "ground"]);