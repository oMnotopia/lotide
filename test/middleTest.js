// const assertArrayEqual = require("../assertArrayEqual");
const findMiddleOfArray = require("../middle");
const assert = require("chai").assert;

//Test code
describe("#middle", () => {
  it("Returns ['hello',4] from [6,2,'hello',4,5,1]", () => {
    const arr = [6,2,'hello',4,5,1];
    assert.deepEqual(findMiddleOfArray(arr), ['hello',4]);
  });

  it("Returns [4] from [6,2,4,5,1]", () => {
    const arr = [6,2,4,5,1];
    assert.deepEqual(findMiddleOfArray(arr), [4]);
  });

  it("Returns undefined from []", () => {
    assert.isUndefined(findMiddleOfArray([]));
  });
});

// assertArrayEqual(findMiddleOfArray([6,2,'hello',4,5,1]), ['hello',4]);