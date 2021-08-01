const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
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


const results1 = map(words, word => word[0]);
console.log(results1);


const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);