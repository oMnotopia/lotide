const assertArrayEqual = require('../assertArrayEqual');
const letterPositions = require('../letterPositions');

const result = letterPositions("This is a turducken");

assertArrayEqual(result["t"],  [0, 7]);
assertArrayEqual(result["e"],  [14]);
assertArrayEqual(result["i"],  [2, 4]);
assertArrayEqual(result["n"],  [15]);