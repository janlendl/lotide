const assertEqual = require('./assertEqual')

const tail = function(array) {
  let newArray = array;
  if (newArray.length <= 1) {
    return newArray;
  }
  newArray = array.slice(1);
  return newArray;
};

module.exports = tail;