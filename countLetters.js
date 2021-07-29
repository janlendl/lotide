const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function (sentence) {
  for (const letter of sentence) {
    console.log(letter);
  }

};

console.log(countLetters('lighthouse in the house'));