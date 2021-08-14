# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @janlendl/lotide`

**Require it:**

`const _ = require('@janlendl/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: This function returns the first index of the given array.
* `function2(middle)`: This function returns the middle value of the array. If the total length is an even number it will take the 2 middle values of the array. Lastly if the array only have 1 or 2 values it will return an empty array.
* `function3(tail)`: This function returns all the elements except the first element of the array.