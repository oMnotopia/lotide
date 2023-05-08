const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

//Test code
const objectInAnObject = { animals: {mammals: {cats: {siamese: {}, shortHaired: {}}, dogs: {pyranese: {}, weiner: {}}}}};
const objectInAnObject2 = { animals: {mammals: {cats: {siamese: {}, shortHaired: {}}, dogs: {pyranese: {}, weiner: {}}}}};
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