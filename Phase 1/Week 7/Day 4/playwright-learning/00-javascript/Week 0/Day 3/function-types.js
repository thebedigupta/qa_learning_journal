'use strict';

// === DECLARATION ===
// Hoisted - can call before definition
console.log(add(2, 3)); // Works!

function add(a, b) {
  return a + b;
}

// === EXPRESSION ===
// Not hoisted - ReferenceError if called before
// console.log(subtract(5, 2)); // Would fail!

const subtract = function(a, b) {
  return a - b;
};

console.log(subtract(5, 2)); // Works here

// === ARROW FUNCTION ===
const multiply = (a, b) => a * b;          // Implicit return
const square = x => x * x;                  // Single param, no parens
const getRandom = () => Math.random();      // No params
const complex = (a, b) => {                 // Multiple statements needs braces
  const result = a + b;
  return result * 2;                        // Explicit return required
};

// === TEST ===
console.log(multiply(3, 4));   // 12
console.log(square(5));        // 25
console.log(getRandom());      // Random number
console.log(complex(2, 3));    // 10

// === KEY DIFFERENCE: 'this' binding ===
const obj = {
  name: 'Test',
  regularFunction: function() {
    console.log(this.name); // 'this' is obj
  },
  arrowFunction: () => {
    console.log(this.name); // 'this' is outer scope (undefined here)
  }
};

obj.regularFunction(); // "Test"
obj.arrowFunction();   // undefined
