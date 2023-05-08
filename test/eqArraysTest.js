const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


assertEqual(eqArrays([[[[2, 3], [["hi"]]]]], [[[[2, 3], [["hi"]]]]]), true); // => should PASS