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
  console.log('object 1: ' + Object.keys(object1));
  console.log('object 2: ' + Object.keys(object2));
  if((Object.keys(object1).length) === (Object.keys(object2).length)){
    for (const keys of (Object.keys(object1))) {
      console.log(`${object1[keys]} = ${object2[keys]}`)
      if(object1[keys] === object2[keys]);
    }
  } else {
    return (false);
  }

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc)); // => false