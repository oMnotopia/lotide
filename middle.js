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

const findMiddleOfArray = function(arr) {
  const arrayLength = arr.length;
  const middleOfArray = Math.floor(arrayLength / 2);
  if (arrayLength === 1 || arrayLength === 2) return [];
  
  if (arrayLength % 2 === 1) return [arr[middleOfArray]];
  return [arr[middleOfArray - 1], arr[middleOfArray]];

};

assertArrayEqual(findMiddleOfArray[6,2,'hello',4,5,1]), ['hello',4]);