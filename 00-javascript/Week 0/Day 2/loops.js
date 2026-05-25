'use strict';

const testCases = [
  { input: 3, expected: 'Fizz' },
  { input: 5, expected: 'Buzz' },
  { input: 15, expected: 'FizzBuzz' },
  { input: 7, expected: '7' }
];

// Pattern 1: for loop with index (when you need position)
console.log('=== For Loop ===');
for (let i = 0; i < testCases.length; i++) {
  console.log(`Test ${i}: ${testCases[i].input}`);
}

// Pattern 2: for...of (when you just need values)
console.log('\n=== For...Of ===');
for (const testCase of testCases) {
  console.log(`Testing: ${testCase.input}`);
}

// Pattern 3: forEach (functional approach)
console.log('\n=== forEach ===');
testCases.forEach((testCase, index) => {
  console.log(`${index}: ${testCase.input} → ${testCase.expected}`);
});

// Pattern 4: while (when iterations unknown)
console.log('\n=== While ===');
let count = 0;
while (count < 3) {
  console.log(`Count: ${count}`);
  count++;
}

// Pattern 5: break/continue control
console.log('\n=== Break/Continue ===');
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue; // Skip 3
  if (i === 7) break;    // Stop at 7
  console.log(i);        // 1, 2, 4, 5, 6
}