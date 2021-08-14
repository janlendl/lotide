const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns [\'Lighhouse\', \'Labs\'] for [\'Hello\', \'Lighthouse\', \'Labs\']', () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it('returns [2 , 3, 4] for [1, 2, 3, 4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it ('returns a blank array [] for a single index of [5]', () => {
    assert.deepEqual(tail([5]), []);
  });
});