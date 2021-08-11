const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array === []) {
    return array;
  }
  return array[0];
};

module.exports = head;