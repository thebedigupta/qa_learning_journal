/**
 * Week 2 - Day 3 Notes
 * Topic: Promises in JavaScript
 *
 * 1) What is a Promise?
 * A Promise is an object that represents the eventual result of an asynchronous operation.
 * It can be in one of these states:
 * - pending: initial state
 * - fulfilled: operation completed successfully
 * - rejected: operation failed
 *
 * 2) Promise Syntax
 *
 * const promise = new Promise((resolve, reject) => {
 *   // async work here
 * });
 *
 * The function passed to new Promise is called the executor.
 * The executor receives two callbacks:
 * - resolve(value): call when the operation succeeds
 * - reject(error): call when the operation fails
 *
 * 3) Example: Rejected Promise
 *
 * const rejectedPromise = new Promise((resolve, reject) => {
 *   setTimeout(() => reject(new Error("Whoops!")), 1000);
 * });
 *
 * 4) Example: Resolved Promise
 *
 * const resolvedPromise = new Promise((resolve, reject) => {
 *   setTimeout(() => resolve("done"), 1000);
 * });
 *
 * 5) Important Note
 * Promise state and result are internal.
 * We do not read them directly.
 * Instead, we use:
 * - .then(...) for success handling
 * - .catch(...) for error handling
 * - .finally(...) for cleanup logic
 *
 * 6) finally()
 * .finally() runs after the promise is settled, no matter success or failure.
 * It is useful for cleanup tasks like hiding a loader.
 *
 * new Promise((resolve, reject) => {
 *   // do async work, then resolve(...) or reject(...)
 * })
 *   .finally(() => {
 *     // always runs
 *     stopLoadingIndicator();
 *   })
 *   .then((result) => {
 *     showResult(result);
 *   })
 *   .catch((error) => {
 *     showError(error);
 *   });
 */

// Exercise 1 :
// Create a Promise that simulates fetching user data
// Use setTimeout for 1.5 seconds delay
// resolve with "User data received" if success = true
// reject with "Server error" if success = false
// Handle both with .then() and .catch()

const newPromise = new Promise((res, rej) => {
  let sucess = true;
  setTimeout(() => {
    if (sucess) {
      res('User data received !');
    } else {
      rej('Server error');
    }
  }, 1500);
});

newPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log('Fetch attempt completed'));

// Exercise 2
// Chain two Promises:
// Step 1: fetch a user after 1 second → resolve with { userId: 1, name: "Suraj" }
// Step 2: after getting user, fetch their orders after 1 second
//         → resolve with ["Order1", "Order2"]
// Print result at each step
// One .catch() at the end handles all errors

let smallPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res({ userId: 1, name: 'suraj' });
  }, 2000);
});

smallPromise
  .then((user) => {
    console.log(`${user.name} data is fetched and passed for validation`);
    return user.userId;
  })
  .then((userId) => {
    console.log(`Coustomer with ID no : ${userId}`);
    return ['Order 1', 'Order 2', 'Order 3'];
  })
  .then((order) => {
    console.log(`Order of the user : `, order);
  })
  .catch((error) => {
    console.log(`Error captured : `, error.message);
  })
  .finally(() => {
    console.log(`All Data fetching is completed `);
  });

// Exercise 3 :

// Create a Promise that:
// - resolves with "Done" after 1 second
// - chain .then() to print result
// - add .catch() and .finally()

let againPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res('Done');
  }, 1000);
});

againPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(`Error message : `, error.message);
  })
  .finally(() => {
    console.log(`All Step completed sucessfully `);
  });
