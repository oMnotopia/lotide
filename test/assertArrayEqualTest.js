const eqArrays = require("../eqArrays");
const assertArrayEqual = require("../assertArrayEqual");

assertArrayEqual(['hello', 2, 3], ['hello', 2, 3]);
assertArrayEqual([1, 2, 3], ['1', 2, 3]);
assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([], [1, 2, 3]);