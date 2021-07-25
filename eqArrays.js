const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(array1, array2, tempHolder) {
  for (let i=0; i <= array1.length; i++) { //since array will always have equal length we can use array1
    if (array1[i] === array2[i]) { //this will compare each element of the array
      tempHolder = true;
    }
    else {
      tempHolder = false;
    }
  }
  return tempHolder;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);