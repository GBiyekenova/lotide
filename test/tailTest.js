const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('returns 3 for 3', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});
