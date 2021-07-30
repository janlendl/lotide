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

//returns true if both objects have identical keys with identical values
//returns false otherwise
const eqObjects = function(object1, object2) {
  let result = false;
  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) { //array length checker
    return result;
  }

  for (const key of (Object.keys(object1))) {
    if ((Array.isArray(object1[key]) && (Array.isArray(object2[key])))) { //check if key[value] is an array
      result = eqArrays(object1[key], object2[key]); //call array function to check the arrays
    } else if (object1[key] === object2[key]) {
      result = true;
    }
  }
  return result;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅ Assertion Object Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑 Assertion Object Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};