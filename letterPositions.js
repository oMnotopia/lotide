const eqArrays = function(arr1, arr2) {
  if (arr1 === undefined || arr2 === undefined) return;
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

const letterPositions = function(sentence) {
  const results = {};
  const joinedString = sentence.replace(/\s+/g, '');
  const lowerCaseString = joinedString.toLowerCase();

  for (let char in lowerCaseString) {
    results[lowerCaseString[char]] !== undefined ? results[lowerCaseString[char]].push(Number(char)) : results[lowerCaseString[char]] = [Number(char)];
  }
  return results;
};

const result = letterPositions("This is a turducken");

assertArrayEqual(result["t"],  [0, 7]);
assertArrayEqual(result["e"],  [14]);
assertArrayEqual(result["i"],  [2, 4]);
assertArrayEqual(result["n"],  [15]);