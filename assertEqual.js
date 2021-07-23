const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Hi', 'Hi');
assertEqual(5, 55);