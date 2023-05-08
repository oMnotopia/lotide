const assertArrayEqual = require('../assertArrayEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, () => words[0]);

assertArrayEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArrayEqual(results2, ["ground", "ground", "ground", "ground", "ground"]);