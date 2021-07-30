const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//returns true if both objects have identical keys with identical values
//returns false otherwise
const eqObjects = function(object1, object2) {

};

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,abc));