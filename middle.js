const eqArrays = function(array1, array2) {
  let tempHolder;
  if (array1.length !== array2.length) { //check first if both arrays have the same length
    tempHolder = false;
  } else { // for loop will run, both arrays have the same length
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) { //this will compare each element of the array
        tempHolder = true;
      } else {
        tempHolder = false;
      }
    }
  }
  return tempHolder;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Array Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Array Failed: ${array1} !== ${array2}`);
  }
};


const middle = function (array) {
  let output = [];
  let arrLength = array.length;
  if (arrLength <= 2) {
    return output;
  } else if (arrLength % 2 == 0) { //even number
    output = array.splice(((arrLength/2)-1), 2, arrLength/2);
  } else if (arrLength % 2 != 0) { //odd number
    output = array.splice(arrLength/2, 1, arrLength/2);
  }

  return output;
};

console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));