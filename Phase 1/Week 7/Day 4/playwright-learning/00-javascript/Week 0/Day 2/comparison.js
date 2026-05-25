'use strict';

// PREDICT before running. This is where most bugs hide.

console.log('=== Strict vs Loose Equality ===');
console.log(5 == '5'); // Your prediction: ? true
console.log(5 === '5'); // Your prediction: ? false
console.log(0 == false); // Your prediction: ? true
console.log(0 === false); // Your prediction: ? false
console.log(null == undefined); // Your prediction: ? true
console.log(null === undefined); // Your prediction: ? false

console.log('\n=== Truthy/Falsy ===');
const falsyValues = [0, '', null, undefined, NaN, false];
falsyValues.forEach((val) => {
  console.log(`${val} is ${val ? 'truthy' : 'falsy'}`);
});

// Every Value of element of falsyValues array is falsy

console.log('\n=== Logical Operators ===');
console.log(true || false); // ? true
console.log(false || 'default'); // ? (short-circuit) default
console.log(true && 'value'); // ? (short-circuit) value
console.log(null ?? 'fallback'); // ? (nullish coalescing) fallback

// Edge case that breaks many programs
console.log('\n=== Edge Case ===');
console.log([] == false); // ? true
console.log([] === false); // ? false
console.log('' == false); // ? true
