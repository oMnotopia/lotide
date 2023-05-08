const head = require("../head");
const assert = require("chai").assert;

describe("#head", () => {
  it("Returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("Returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });

  it("Returns 'Hello' from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("Returns undefined for []", () => {
    assert.isUndefined(head([]));
  });
});