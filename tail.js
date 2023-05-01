const tail = function(arr) {
  const arrTail = arr.slice(1);
  for (let i = 0; i < arrTail.length; i++) {
    assertEqual(arrTail[i], arr[i + 1]);
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

let j = [1, 2, 3, 4];

console.log(tail(j));