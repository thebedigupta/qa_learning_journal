'use strict';

/**
 * Calculator with comprehensive error handling
 * Requirements:
 * 1. Handle addition, subtraction, multiplication, division
 * 2. Validate inputs (numbers only)
 * 3. Handle division by zero
 * 4. Return meaningful error messages
 * 5. Support chaining: calc.add(5).multiply(2).result()
 */

class Calculator {
  constructor() {
    this.value = 0;
    this.errors = [];
  }

  // TODO: Implement validateNumber method
  // Should check if input is number, not NaN, finite
  // If invalid, add to errors array and return false
  validateNumber(nums) {
    if (
      typeof nums !== 'number' ||
      Number.isNaN(nums) ||
      !Number.isFinite(nums)
    ) {
      this.errors.push(`Invalid Input: ${nums}`);
      return false;
    }
    return true;
  }

  add(num) {
    if (!this.validateNumber(num)) {
      return this; // Return for chaining even on error
    }
    this.value += num;
    return this; // For chaining
  }

  subtract(num) {
    // TODO: Implementation
    if (!this.validateNumber(num)) {
      return this;
    }
    this.value -= num;
    return this;
  }

  multiply(num) {
    // TODO: Implementation
    if (!this.validateNumber(num)) {
      return this;
    }
    this.value *= num;
    return this;
  }

  divide(num) {
    // TODO: Implementation with zero check
    if (!this.validateNumber(num)) {
      return this;
    }
    if (num === 0) {
      this.errors.push(`This is number is not allowed ${num}`);
      return this;
    }
    this.value = this.value / num;
    return this;
  }

  getResult() {
    // TODO: Return result or throw if errors exist
    if (this.errors.length > 0) {
      throw new Error(`Calulator failed with errors : ${this.errors}`);
    }
    return this.value;
  }

  getErrors() {
    return this.errors;
  }

  reset() {
    this.value = 0;
    this.errors = [];
    return this; // For chaining
  }
}

// Test cases (uncomment as you implement)
const calc = new Calculator();
console.log(calc.add(5).multiply(2).getResult()); // 10
console.log(calc.reset().divide(0).getErrors()); // ['Division by zero']
// console.log(calc.reset().add('invalid').getErrors()); // ['Invalid input: expected number']

module.exports = Calculator; // For testing
