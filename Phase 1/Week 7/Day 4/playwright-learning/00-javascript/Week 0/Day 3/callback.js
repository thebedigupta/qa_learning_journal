'use strict';

// === CALLBACK PATTERN ===
// Function passed as argument to another function

function processArray(arr, callback) {
  const results = [];
  for (const item of arr) {
    results.push(callback(item));
  }
  return results;
}

// Usage
const numbers = [1, 2, 3, 4, 5];

const doubled = processArray(numbers, (x) => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const squared = processArray(numbers, (x) => x ** 2);
console.log(squared); // [1, 4, 9, 16, 25]

// === HIGHER-ORDER FUNCTION ===
// Returns a function
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const triple = createMultiplier(3);
const double = createMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// === ARRAY METHODS WITH CALLBACKS ===
const scores = [45, 82, 67, 91, 55, 38];

// filter: keep items where callback returns true
const passing = scores.filter((score) => score >= 60);
console.log('Passing:', passing); // [82, 67, 91]

// map: transform each item
const grades = scores.map((score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
});
console.log('Grades:', grades);

// find: first match
const firstA = scores.find((score) => score >= 90);
console.log('First A:', firstA); // 91

// some: any match?
const hasFailure = scores.some((score) => score < 60);
console.log('Has failure:', hasFailure); // true

// every: all match?
const allPassing = scores.every((score) => score >= 60);
console.log('All passing:', allPassing); // false

// reduce: accumulate to single value
const sum = scores.reduce((total, score) => total + score, 0);
const average = sum / scores.length;
console.log('Average:', average);
