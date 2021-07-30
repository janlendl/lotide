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


//test case for primitive values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


//test case for arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false