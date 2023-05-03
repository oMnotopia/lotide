const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(stringToBeCounted) {
  const charCounter = {};
  const joinedString = stringToBeCounted.replace(/\s+/g, '');
  const lowerCaseString = joinedString.toLowerCase();
  for (const char of lowerCaseString) {
    charCounter[char] = charCounter[char] + 1 || 1;
  }
  return charCounter;
};

const result = countLetters("This string is to be counted")

assertEqual(result["t"], 4);
assertEqual(result["i"], 3);
assertEqual(result["z"], undefined);
