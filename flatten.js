const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Array Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Array Failed: ${array1} !== ${array2}`);
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

const flatten = function(array) {
  let flatArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (const subElement of element) {
        flatArray.push(subElement);
      }
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

console.log(flatten(([1, 2, [3, 4], 5, ['lendl']])));