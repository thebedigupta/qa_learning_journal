'use strict';

const Calculator = require('./day1-calculator');

console.log('=== Test 1: Basic chaining ===');
const calc1 = new Calculator();
const result1 = calc1.add(5).multiply(2).getResult();
console.log(`5 + then * 2 = ${result1}`); // Should be 10
console.assert(result1 === 10, 'Test 1 failed');

console.log('\n=== Test 2: Division by zero ===');
const calc2 = new Calculator();
calc2.add(10).divide(0);
console.log('Errors:', calc2.getErrors());
try {
  calc2.getResult();
  console.log('ERROR: Should have thrown');
} catch (e) {
  console.log('Correctly threw:', e.message);
}

console.log('\n=== Test 3: Invalid input ===');
const calc3 = new Calculator();
calc3.add('invalid').multiply(2);
console.log('Errors:', calc3.getErrors());

console.log('\n=== Test 4: Multiple errors ===');
const calc4 = new Calculator();
calc4.add(NaN).divide(0).add('text');
console.log('All errors:', calc4.getErrors());

console.log('\n=== Test 5: Reset functionality ===');
const calc5 = new Calculator();
calc5.add(5).reset().add(3);
console.log('After reset + 3:', calc5.getResult()); // Should be 3
