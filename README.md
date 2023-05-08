# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @omnotopia/lotide`

**Require it:**

`const _ = require('@omnotopia/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(str)`: Counts the number of times a character appears in a given string.
* `countOnly([])`: Counts the number of times a given string appears in an array.
* `eqArrays(arr1, arr2)`: Takes two arrays, comapares them, and returns true or false.
* `eqObjects(obj1, obj2)`: Takes two objects, comapares them, and returns true or false.
* `findKey(obj, cb)`: Takes an object and callback and returns the key based on the return value of the callback.
* `findKeyByValue(obj, str)`: Takes an object and and a string and returns the value where the key matches the string.
* `flatten(arr)`: Takes an array with nested arrays and returns an array that is only 1 level deep.
* `head(arr)`: Takes an array and returns the first element.
* `letterPosition(str)`: Takes a string and returns an object that contains arrays of all the index positions of each character.
* `map(arr, cb)`: Takes an array and a callback and returns an array where each element of the original array has been modified by the callback.
* `middle(arr)`: Takes an array and returns the element contained in the middle.
* `tail(arr)`: Takes an array and returns the last element contained.
* `takeUntil(arr, cb)`: Takes an array and callback and returns the array until the element no longer passes the callback.
* `map(arr, arr)`: Takes two arrays and removes values from the first array that match values in the second.
