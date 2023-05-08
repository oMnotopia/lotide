const assertArrayEqual = require('../assertArrayEqual');
const without = require('../without');

const modifiedArray = without([1,2,3,'Hello'], [1,2]);

assertArrayEqual(modifiedArray, [3, 'Hello']);