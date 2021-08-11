const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array) {
  let output = [];
  const arrLength = array.length;
  if (arrLength <= 2) {
    return output;
  } else if (arrLength % 2 === 0) { //even number
    output = array.slice(((arrLength/2)-1), (arrLength/2)+1);
  } else { //odd number
    output = array.slice(arrLength/2, (arrLength/2)+1);
  }
  return output;
};

module.exports = middle;