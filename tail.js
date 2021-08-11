const assertEqual = require('./assertEqual')

const tail = (array =>  {
  let newArray = array;
  return (newArray.length <= 1 ? newArray : newArray = array.slice(1));
  });

module.exports = tail;
