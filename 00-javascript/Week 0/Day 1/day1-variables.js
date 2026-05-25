'use strict';

// Task 1: Fix the scope issues
function scopeTest() {
  let newWay = 'I am block scoped';
  const constant = 'I cannot be reassigned';
  var oldWay = 'I am function scoped';
  if (true) {
    // What happens here? Predict before running.
  }

  console.log(oldWay); // ?
  console.log(newWay); // ?
  console.log(constant); // ?
}

scopeTest();
// Task 2: Temporal Dead Zone demonstration
{
  // What happens? it sayss reference wrror
  let tdZVar = 'I exist after declaration';
  console.log(tdZVar);
}

// Task 3: const with objects - what is constant?
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};

config.timeout = 10000; // Allowed? Not Allowed
// config = {}; // Allowed? Not Allowed

// Task 4: Best practice declaration
// Rewrite using best practices (const by default, let when necessary, never var)
const userName = 'John';
let userAge = 25;
const isAdmin = true;
userAge = 26; // Needs to change
