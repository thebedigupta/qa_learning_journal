'use strict';

// === CLOSURE DEFINITION ===
// Function that remembers variables from its outer scope
// Even after outer function has finished executing

function createCounter() {
  let count = 0; // Enclosed variable
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
    reset: () => { count = 0; return count; }
  };
}

const counter1 = createCounter();
const counter2 = createCounter(); // Separate closure!

console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter2.increment()); // 1 (separate count)
console.log(counter1.getCount());  // 2
console.log(counter1.reset());     // 0

// === PRACTICAL: Private Variables ===
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private!
  
  return {
    deposit: (amount) => {
      if (amount <= 0) return 'Invalid amount';
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      if (amount <= 0) return 'Invalid amount';
      if (amount > balance) return 'Insufficient funds';
      balance -= amount;
      return balance;
    },
    getBalance: () => balance
  };
}

const account = createBankAccount(100);
console.log(account.getBalance());  // 100
console.log(account.deposit(50));   // 150
console.log(account.withdraw(200)); // Insufficient funds
console.log(account.balance);       // undefined (private!)

// === CLOSURE IN LOOPS (Classic Gotcha) ===
console.log('\n=== Loop Closure Problem ===');
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log('var:', i), 100); // All print 4!
}

for (let j = 1; j <= 3; j++) {
  setTimeout(() => console.log('let:', j), 100); // 1, 2, 3
}

// Fix with closure (if you must use var)
for (var k = 1; k <= 3; k++) {
  (function(capturedK) {
    setTimeout(() => console.log('closure:', capturedK), 100);
  })(k);
}