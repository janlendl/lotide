const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns [5] from [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
  });

  it('returns [5, 6] from [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });

  it('returns [ ] from [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
});


// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);