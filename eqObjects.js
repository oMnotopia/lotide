const eqArrays = require("./eqArrays");

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

