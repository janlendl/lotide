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
    for (let i=0; i < array1.length; i++) {
      if (array1[i] === array2[i]) { //this will compare each element of the array
        tempHolder = true;
      }
      else {
        tempHolder = false;
      }
    }
  }
  return tempHolder;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3', '4']), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays([1, 5, 7], [7, 5, 1]), false);