# Week 2 - Day 3: Promises - Async Programming Basics

## 📚 What is this about?

Today you learned about **Promises** - a way to handle operations that take time (like fetching data from a server) without blocking your code.

---

## 🎯 What is a Promise?

A **Promise** is an object that represents the eventual result of an **asynchronous operation** (something that takes time).

### Real-World Analogy

Think of ordering food at a restaurant:

- **Promise created** → You order and get a ticket
- **Pending** → Waiting for food to be cooked
- **Fulfilled** → Food is ready! (resolved)
- **Rejected** → Food ran out! (rejected)

---

## 3️⃣ Promise States

### 1. Pending

Initial state - operation hasn't completed yet.

### 2. Fulfilled (Resolved)

Operation completed successfully - promise has a **result value**.

### 3. Rejected

Operation failed - promise has an **error reason**.

```javascript
// A promise goes: Pending → Fulfilled OR Rejected (never reverses!)
```

---

## 💻 Creating a Promise

### Basic Syntax

```javascript
const promise = new Promise((resolve, reject) => {
  // Async work here

  if (success) {
    resolve(value); // Fulfill with value
  } else {
    reject(error); // Reject with error
  }
});
```

### The Executor Function

- Takes two callbacks: `resolve` and `reject`
- `resolve(value)`: Fulfill the promise
- `reject(error)`: Reject the promise

---

## ✅ Fulfilled Promise Example

```javascript
const resolvedPromise = new Promise((resolve, reject) => {
  // Simulate async work with setTimeout
  setTimeout(() => {
    resolve('Operation successful!'); // Fulfill after 1 second
  }, 1000);
});

console.log(resolvedPromise); // Promise { <pending> }
// After 1 second: Promise { 'Operation successful!' }
```

---

## ❌ Rejected Promise Example

```javascript
const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong!')); // Reject after 1 second
  }, 1000);
});

// After 1 second: Promise { <rejected> Error: Something went wrong! }
```

---

## 🔗 Handling Promises

### `.then()` - Success Handler

Runs when promise is **fulfilled**.

```javascript
const promise = new Promise((resolve) => {
  setTimeout(() => resolve('Success!'), 1000);
});

promise.then((result) => {
  console.log(result); // Prints 'Success!' after 1 second
});
```

### `.catch()` - Error Handler

Runs when promise is **rejected**.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Failed!')), 1000);
});

promise.catch((error) => {
  console.log(error.message); // Prints 'Failed!' after 1 second
});
```

### `.finally()` - Cleanup Code

Runs **regardless of success or failure** (useful for cleanup).

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done!'), 1000);
});

promise
  .then((result) => console.log(result)) // Success
  .catch((error) => console.log(error)) // Error
  .finally(() => console.log('Complete')); // Always runs

// Output: Done, then Complete
```

---

## 📝 Complete Example: Simulating Data Fetch

```javascript
// Simulate fetching user data from server
const userPromise = new Promise((resolve, reject) => {
  let success = true; // Simulate success/failure

  setTimeout(() => {
    if (success) {
      resolve('User data received!');
    } else {
      reject('Server error');
    }
  }, 1500); // Takes 1.5 seconds
});

// Handle the promise
userPromise
  .then((result) => console.log('✅ ' + result))
  .catch((error) => console.log('❌ ' + error))
  .finally(() => console.log('Fetch attempt completed'));

// Output after 1.5 seconds:
// ✅ User data received!
// Fetch attempt completed
```

---

## 🔗 Chaining Promises

Chain multiple promises where one starts after another completes.

### Scenario: Multi-Step Process

1. Fetch user (1 sec)
2. Fetch user's orders (1 sec)
3. Fetch product details (1 sec)

```javascript
// Step 1: Fetch user
let userPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ userId: 1, name: 'Suraj' });
  }, 1000);
});

// Chain Step 2 and 3
userPromise
  .then((user) => {
    console.log(`User data: ${user.name}`);
    return user.userId; // Pass data to next .then()
  })
  .then((userId) => {
    console.log(`Processing user ID: ${userId}`);
    return ['Order1', 'Order2', 'Order3']; // Next .then() receives this
  })
  .then((orders) => {
    console.log(`Orders: ${orders}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`); // Catches ANY error in chain
  })
  .finally(() => {
    console.log('All operations complete');
  });

// Output:
// User data: Suraj
// Processing user ID: 1
// Orders: Order1,Order2,Order3
// All operations complete
```

---

## ⚠️ Important Notes About Promises

### 1. Promise States Are Permanent

Once a promise is fulfilled or rejected, it **cannot change**.

```javascript
const promise = new Promise((resolve, reject) => {
  resolve('Success');
  reject('Failed'); // ❌ Ignored! Already resolved
});
```

### 2. Internal State is Hidden

You **cannot directly read** a promise's value:

```javascript
const promise = Promise.resolve('Hello');
console.log(promise.value); // ❌ undefined (no direct access)

// Must use .then() to access
promise.then((value) => console.log(value)); // ✅ Hello
```

### 3. One .catch() Handles All Errors

```javascript
promise1
  .then((result1) => {
    // If error here...
  })
  .then((result2) => {
    // Or error here...
  })
  .catch((error) => {
    // Both caught here!
    console.log(error);
  });
```

---

## 🎯 Promise Flow Diagram

```
Promise Created (Pending)
        ↓
    Work Done
        ↓
   Success?
    /     \
   YES     NO
   ↓       ↓
Resolve  Reject
   ↓       ↓
Fulfilled Rejected
   ↓       ↓
 .then()  .catch()
   ↓       ↓
.finally() (always runs)
```

---

## 💪 Practical Example: Test Report Promise

```javascript
// Simulate async test execution
function runTest(testName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const passed = Math.random() > 0.3; // 70% pass rate

      if (passed) {
        resolve({ name: testName, status: 'PASSED' });
      } else {
        reject({ name: testName, status: 'FAILED' });
      }
    }, 2000);
  });
}

// Run test and handle result
runTest('Login Test')
  .then((result) => {
    console.log(`✅ ${result.name}: ${result.status}`);
  })
  .catch((error) => {
    console.log(`❌ ${error.name}: ${error.status}`);
  })
  .finally(() => {
    console.log('Test execution complete');
  });
```

---

## 📊 Promise Methods Quick Reference

| Method                   | What it does                           |
| ------------------------ | -------------------------------------- |
| `resolve(value)`         | Fulfill promise with value             |
| `reject(error)`          | Reject promise with error              |
| `.then(success, error?)` | Handle success (and optionally error)  |
| `.catch(error)`          | Handle error only                      |
| `.finally(cleanup)`      | Always runs for cleanup                |
| `.all([...promises])`    | Wait for all promises (covered later)  |
| `.race([...promises])`   | Wait for first promise (covered later) |

---

## ✨ Key Takeaways

1. **Promises** handle async operations without blocking
2. **States**: Pending → Fulfilled OR Rejected (permanent)
3. **`.then()`** for success, **`.catch()`** for error
4. **`.finally()`** runs always (good for cleanup)
5. **Chain promises** by returning values
6. **One `.catch()`** catches all errors in chain
7. Promise **states and values are hidden** (use `.then()` to access)

---

## 📝 Summary

- **Promise** = Object representing eventual async result
- **Creating**: `new Promise((resolve, reject) => { ... })`
- **Handling**: `.then()`, `.catch()`, `.finally()`
- **Chaining**: Return value from one `.then()` to next
- **Error handling**: Single `.catch()` catches all errors
- This is the **foundation for async/await** (coming next day!)
