const tail = require('../tail');
const assertEqual = require("../assertEqual");

//Test cases
let arr = [1, 2, 3, 4];

const result = tail(arr);

assertEqual(result[0], 2);
assertEqual(result[1], 3);
assertEqual(result[2], 4);