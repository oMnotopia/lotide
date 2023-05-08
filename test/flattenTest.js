const assertArrayEqual = require('../assertArrayEqual');
const flatten = require('../flatten');


const flattenedArray = flatten([1, 2, [3, 4], 5, [6]]);
assertArrayEqual(flattenedArray, [1, 2, 3, 4, 5, 6]);