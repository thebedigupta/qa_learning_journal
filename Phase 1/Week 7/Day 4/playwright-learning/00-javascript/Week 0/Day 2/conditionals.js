'use strict';

// Pattern 1: Guard clause (preferred for validation)
function calculateWithGuard(value) {
  if (typeof value !== 'number') {
    return 'Invalid: not a number';
  }
  if (value < 0) {
    return 'Invalid: negative number';
  }
  // Main logic only runs if all guards pass
  return value * 2;
}

// Pattern 2: Nested if-else (harder to read, avoid)
function calculateNested(value) {
  if (typeof value === 'number') {
    if (value >= 0) {
      return value * 2;
    } else {
      return 'Invalid: negative number';
    }
  } else {
    return 'Invalid: not a number';
  }
}

// Pattern 3: Ternary for simple assignments
function getStatus(score) {
  // condition ? ifTrue : ifFalse
  return score >= 60 ? 'pass' : 'fail';
}

// Pattern 4: Switch for multiple discrete values
function getDayName(dayNum) {
  switch (dayNum) {
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    case 3: return 'Wednesday';
    case 4: return 'Thursday';
    case 5: return 'Friday';
    case 6: return 'Saturday';
    case 7: return 'Sunday';
    default: return 'Invalid day';
  }
}

// Test all patterns
console.log(calculateWithGuard(5));      // 10
console.log(calculateWithGuard(-5));     // Invalid: negative
console.log(calculateWithGuard('five')); // Invalid: not a number

console.log(getStatus(75));  // pass
console.log(getStatus(45));  // fail

console.log(getDayName(3));  // Wednesday
console.log(getDayName(8));  // Invalid day