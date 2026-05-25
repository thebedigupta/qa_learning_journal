// Exercise 1 — Rewrite Day 10 Exercise 1 using async/await

// Take your Promise from Day 10 Exercise 1
// Rewrite it using async function + await + try/catch
// No .then() or .catch() allowed this time

// const newPromise = new Promise((res, rej) => {
//   let sucess = true;
//   setTimeout(() => {
//     if (sucess) {
//       res('User data received !');
//     } else {
//       rej('Server error');
//     }
//   }, 1500);
// });

// async function validateData(newPromise) {
//   try {
//     const result = await newPromise;
//     console.log(`Result : `, result);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log(`All Work done correctly`);
//   }
// }

// Exercise 2
// Chain two Promises:
// Step 1: fetch a user after 1 second → resolve with { userId: 1, name: "Suraj" }
// Step 2: after getting user, fetch their orders after 1 second
//         → resolve with ["Order1", "Order2"]
// Print result at each step
// One .catch() at the end handles all errors

// let fetchUser = new Promise((res, rej) => {
//   setTimeout(() => {
//     res({ userId: 1, name: 'suraj' });
//   }, 2000);
// });

// smallPromise
//   .then((user) => {
//     console.log(`${user.name} data is fetched and passed for validation`);
//     return user.userId;
//   })
//   .then((userId) => {
//     console.log(`Coustomer with ID no : ${userId}`);
//     return ['Order 1', 'Order 2', 'Order 3'];
//   })
//   .then((order) => {
//     console.log(`Order of the user : `, order);
//   })
//   .catch((error) => {
//     console.log(`Error captured : `, error.message);
//   })
//   .finally(() => {
//     console.log(`All Data fetching is completed `);
//   });

// Take your chained Promises from Day 10 Exercise 2
// Rewrite using async/await
// fetch user → fetch orders → print both
// Use try/catch for error handling

// function fetchUser() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res({ userId: 101, name: 'Raju' });
//     }, 1000);
//   });
// }

// function fetchOrders(userId) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(['Order1', 'Order2', 'Order3']);
//     }, 1000);
//   });
// }

// async function fetchUserandOrder() {
//   try {
//     let user = await fetchUser();
//     console.log(`User fetching completed : `, user.name);
//     let order = await fetchOrders(user.userId);
//     console.log(`Orders by user : `, order);
//   } catch (error) {
//     console.log(`Error message : `, error.message);
//   } finally {
//     console.log(`Fetching all data was completed`);
//   }
// }

// fetchUserandOrder();

// Create 3 fake async functions using setTimeout:
// fetchProfile()  → resolves after 1s with { name: "Suraj" }
// fetchOrders()   → resolves after 1s with ["Order1", "Order2"]
// fetchSettings() → resolves after 1s with { theme: "dark" }

// Fetch all 3 IN PARALLEL using Promise.all()
// Print all results together
// Total time should be ~1 second, not 3 seconds

// function fetchProfile() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res({ userId: 101, name: 'Raju' });
//     }, 1000);
//   });
// }

// function fetchOrders() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(['Order1', 'Order2']);
//     }, 1000);
//   });
// }

// function fetchTheme() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res({ theme: 'dark' });
//     }, 1000);
//   });
// }

// async function fetchAll() {
//   try {
//     const [userName, order, theme] = await Promise.all([
//       fetchProfile(),
//       fetchOrders(),
//       fetchTheme(),
//     ]);
//     console.log(userName.name, order, theme.theme);
//   } catch (error) {
//     console.log(`Error message : `, error.message);
//   } finally {
//     console.log(`All data fetching is completed`);
//   }
// }

// fetchAll();
