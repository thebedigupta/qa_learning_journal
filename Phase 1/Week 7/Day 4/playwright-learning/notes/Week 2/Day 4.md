# Week 2 - Day 4: Async/Await - Modern Promise Handling

## 📚 What is this about?

Today you learned **async/await** - a cleaner, more readable way to handle promises (compared to `.then()/.catch()`).

---

## 🎯 What is Async/Await?

**Async/await** is syntactic sugar (nicer syntax) for promises that makes async code look like synchronous code.

### Real Comparison

**Promises (old)** vs **Async/Await (modern)**

```javascript
// Promises with .then()
function fetchUser() {
  return userPromise
    .then((user) => console.log(user))
    .catch((error) => console.log(error));
}

// Async/Await (cleaner!)
async function fetchUser() {
  try {
    let user = await userPromise;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
```

---

## 📝 Async Function Syntax

### The `async` Keyword

Declares that a function is asynchronous and can use `await`.

```javascript
async function myFunction() {
  // Can use await here
}

// Or with arrow function
const myFunction = async () => {
  // Can use await here
};
```

### Key Point

An `async` function **always returns a promise**.

```javascript
async function greet() {
  return 'Hello';
}

console.log(greet()); // Promise { 'Hello' }

// To get the value:
greet().then((value) => console.log(value)); // Hello
```

---

## ⏳ The `await` Keyword

### What Does It Do?

**Pauses execution** until a promise is settled, then returns the result.

```javascript
async function fetchData() {
  let result = await somePromise; // Wait for promise to complete
  console.log(result); // Use the result
}
```

### Important Notes

- **Can ONLY be used inside `async` functions**
- Makes code look **synchronous even though it's async**
- **Doesn't block other code** (still non-blocking)

---

## 🔄 Converting From Promises to Async/Await

### Before (Promises with .then()/.catch())

```javascript
function fetchUserData() {
  return userPromise
    .then((user) => {
      console.log(`User: ${user.name}`);
      return user.id;
    })
    .then((userId) => {
      console.log(`User ID: ${userId}`);
      return fetchOrders(userId);
    })
    .catch((error) => {
      console.log(`Error: ${error.message}`);
    })
    .finally(() => {
      console.log('Fetch complete');
    });
}
```

### After (Async/Await)

```javascript
async function fetchUserData() {
  try {
    let user = await userPromise;
    console.log(`User: ${user.name}`);

    let userId = user.id;
    console.log(`User ID: ${userId}`);

    let orders = await fetchOrders(userId);
    console.log(orders);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log('Fetch complete');
  }
}
```

---

## 🛡️ Error Handling with Try/Catch/Finally

### Try Block

Contains code that might throw an error.

### Catch Block

Runs if an error occurs.

### Finally Block

Runs regardless (like `.finally()` in promises).

```javascript
async function processData() {
  try {
    // This might throw error
    let data = await fetchData();
    console.log('Data:', data);
  } catch (error) {
    // Handle error
    console.log('Error:', error.message);
  } finally {
    // Always run
    console.log('Processing complete');
  }
}
```

---

## 💪 Complete Example: User & Orders

### Scenario

1. Fetch user data (1 second)
2. Fetch user's orders (1 second)
3. Print both

### Using Promises (.then/.catch)

```javascript
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId: 101, name: 'Raju' });
    }, 1000);
  });
}

function fetchOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Order1', 'Order2', 'Order3']);
    }, 1000);
  });
}

// Using promises
fetchUser()
  .then((user) => {
    console.log('User data:', user.name);
    return fetchOrders(user.userId);
  })
  .then((orders) => {
    console.log('Orders:', orders);
  })
  .catch((error) => {
    console.log('Error:', error.message);
  })
  .finally(() => {
    console.log('All done');
  });
```

### Using Async/Await (Cleaner!)

```javascript
async function getUserAndOrders() {
  try {
    let user = await fetchUser();
    console.log('User data:', user.name);

    let orders = await fetchOrders(user.userId);
    console.log('Orders:', orders);
  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    console.log('All done');
  }
}

getUserAndOrders();
```

---

## ⚡ Parallel Execution with `Promise.all()`

When you have **multiple independent async operations**, don't wait for them sequentially:

### Sequential (Slow)

```javascript
async function slow() {
  let user = await fetchUser(); // 1 second
  let products = await fetchProducts(); // 1 second
  // Total: 2 seconds
}
```

### Parallel (Fast)

```javascript
async function fast() {
  let [user, products] = await Promise.all([fetchUser(), fetchProducts()]);
  // Total: ~1 second (runs in parallel)
}
```

---

## 🎯 When to Use Async/Await

| Situation                      | Use                           |
| ------------------------------ | ----------------------------- |
| Simple promise                 | `.then()` is fine             |
| Error handling needed          | `try/catch` is clearer        |
| Multiple sequential operations | `async/await` is cleaner      |
| Multiple parallel operations   | `Promise.all() + async/await` |

---

## 📊 Comparison: Promises vs Async/Await

| Feature        | Promises      | Async/Await      |
| -------------- | ------------- | ---------------- |
| Error handling | `.catch()`    | try/catch        |
| Result access  | `.then()`     | `await` directly |
| Readability    | Nested chains | Linear code      |
| Learning curve | Moderate      | Easy             |
| Performance    | Same          | Same             |

---

## ✋ Common Mistakes

### ❌ Forgetting `async` Keyword

```javascript
function getData() {
  let result = await promise;  // ❌ ERROR! Not marked async
}

async function getData() {
  let result = await promise;  // ✅ Correct
}
```

### ❌ Not Using `await`

```javascript
async function getData() {
  let result = promise; // Returns Promise, not value
  console.log(result); // Promise { ... }
}

async function getData() {
  let result = await promise; // ✅ Actually waits
  console.log(result); // Actual value
}
```

### ❌ Ignoring Errors

```javascript
async function getData() {
  let result = await riskyOperation(); // Might throw!
  // ❌ No try/catch = unhandled error
}

async function getData() {
  try {
    let result = await riskyOperation(); // ✅ Safe
  } catch (error) {
    console.log('Caught error:', error);
  }
}
```

---

## 🚀 Real-World Example: API Testing

```javascript
async function testUserAPI() {
  try {
    // Simulate GET request
    console.log('Fetching user data...');
    let userResponse = await fetch('/api/user/101');
    let user = await userResponse.json();

    console.log(✅ User fetched: ${user.name});

    // Simulate POST request
    console.log('Creating new order...');
    let orderResponse = await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify({ userId: user.id, items: ['item1'] })
    });
    let order = await orderResponse.json();

    console.log(✅ Order created: ${order.id});

  } catch (error) {
    console.log(❌ Test failed: ${error.message});
  } finally {
    console.log('Test execution completed');
  }
}

testUserAPI();
```

---

## 💡 Key Tips

1. **Always use `async` before `await`**
2. **Always wrap `await` in try/catch** for error handling
3. **Use `Promise.all()` for parallel operations**
4. **Async functions return promises** (remember!)
5. **Await makes code look sync**, but it's still async

---

## 📝 Summary

- **`async`** declares function can use `await`
- **`await`** pauses execution until promise resolves
- **`try/catch/finally`** handles errors (like `.catch()/.finally()`)
- **Parallel execution** with `Promise.all()`
- **Cleaner code** than chains of `.then()`
- **Still async** - doesn't block other code
