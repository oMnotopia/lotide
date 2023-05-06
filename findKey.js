const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = (obj, callback) => {
  for (const element in obj) {
    if (callback(obj[element])) {
      return element;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");// => "noma"

assertEqual(findKey({
  Vancouver: 55,
  Princeton: 20,
  Detroit: 80,
  Banff: 100,
  Miami:  25,
}, x => x < 20), "Miami");