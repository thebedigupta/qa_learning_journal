'use strict';

/**
 * Extensible FizzBuzz
 * Rules format: [{ divisor: 3, word: 'Fizz' }, { divisor: 5, word: 'Buzz' }]
 */

class FizzBuzz {
  constructor(rules = []) {
    // TODO: Store rules (default to standard FizzBuzz if empty)
    this.rules =
      rules.length > 0
        ? rules
        : [
            { divisor: 3, word: 'Fizz' },
            { divisor: 5, word: 'Buzz' },
          ];
  }

  // TODO: Check if number matches a single rule
  // Returns word if matches, empty string if not
  checkRule(number, rule) {
    // Implement: if number % rule.divisor === 0, return rule.word
    if (number % rule.divisor === 0) {
      return rule.word;
    } else {
      return '';
    }
  }

  // TODO: Process single number through all rules
  // Concatenate all matching words, or return number as string
  processNumber(number) {
    // Loop through this.rules, collect matching words
    // If no matches, return String(number)
    let result = '';
    for (let rule of this.rules) {
      result += this.checkRule(number, rule);
    }
    return result || String(number);
  }

  // TODO: Generate sequence from start to end
  // Returns array of results
  generate(start, end) {
    // Loop from start to end, process each number
    // Return array of results
    const sequence = [];
    for (let i = start; i <= end; i++) {
      sequence.push(this.processNumber(i));
    }
    return sequence;
  }

  // TODO: Print formatted output
  print(start, end) {
    // Generate sequence, then console.log each item
    const sequence = this.generate(start, end);
    for (let item of sequence) {
      console.log(item);
    }
  }
}

// === TEST CASES ===

// Test 1: Standard FizzBuzz
console.log('=== Standard FizzBuzz (1-20) ===');
const fb1 = new FizzBuzz();
fb1.print(1, 20);
// Expected: 1, 2,
