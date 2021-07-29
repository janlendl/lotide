const letterPositions = function(sentence) {
  const results = {};
  let indexCounter = [];
  for (const letter of sentence) { //for loop to extract each letter
    for (let i = 0; i < sentence.length; i++) {
      console.log(i);
      if (letter !== ' ') { //if statement to make sure the space will not be counted
        if (results[letter]) {
          results[letter] = indexCounter.push(i);
        } else {
          results[letter] = indexCounter.push(i);
        }
      }
    }
  }
  // logic to update results here
  console.log(results);
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


assertArraysEqual(letterPositions("hello").e, [1]);