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

const without = function(actualArray, itemToRemove) {
  const noArrayPair = [];
  for (const actual of actualArray) {
    let removeIt = true;
    for (const item of itemToRemove) {
      if (actual === item) {
        removeIt = false;
      }
    }
    if (removeIt) {
      noArrayPair.push(actual);
    }
  }
  return noArrayPair;
};


const words = ["hello", "world", "lighthouse"];
without(words, ["hello"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);