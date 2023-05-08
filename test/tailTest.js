const tail = require('../tail');
const assert = require("chai").assert;

//Test cases
describe("#tail", () => {
  it("Returns [2, 3, 4] from [1, 2, 3, 4]", () => {
    const arr = [1, 2, 3, 4];
    assert.deepEqual(tail(arr), [2, 3, 4]);
  });

  it("Returns undefined from []", () => {
    assert.isUndefined(tail([]));
  });
});