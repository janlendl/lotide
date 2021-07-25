const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

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

assertArraysEqual([5, 6, 7], [1, 2, 3]); // false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual([1, 2, 3], [1, 2, '3']); //false

/*
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertArraysEqual(eqArrays(['1', '2', '3'], ['1', '2', '3', '4']), false);
assertArraysEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertArraysEqual(eqArrays([1, 5, 7], [7, 5, 1]), false);
*/