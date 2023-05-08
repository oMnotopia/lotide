const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  if (obj1 === undefined || obj2 === undefined) return false;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      if ((eqArrays(obj1[key], obj2[key])) === false) return false;
    } else if (typeof obj1[key] === "object") {
      if (!eqObjects(obj1[key], obj2[key])) return false;
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
};

module.exports = eqObjects;

const objectInAnObject = { animals: {mammals: {cats: {siamese: {}, shortHaired: {}}, dogs: {pyranese: {}, weiner: {}}}}};
const objectInAnObject2 = { animals: {mammals: {cats: {siamese: {}, shortHaired: {}}, dogs: {pyranese: {}, weiner: {}, terrier: {}}}}};
//const anotherObjectInAnObject = { animals: {avians: {flightless: {penguins: {}, kiwi: {}}, flying: {raven: {}, eagle: {}}}}};
assertEqual(eqObjects(objectInAnObject, objectInAnObject2), true);

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false