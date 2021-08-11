const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([5, 6, 7], [1, 2, 3]); // false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual([1, 2, 3], [1, 2, '3']); //false