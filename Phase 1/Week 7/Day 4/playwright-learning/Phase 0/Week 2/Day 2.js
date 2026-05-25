/**
 * Demonstrates array destructuring in JavaScript
 * @description Extracts specific elements from an array using destructuring syntax.
 * Skips the third element (blue) and captures the first, second, and fourth elements.
 *
 * @example
 * const colors = ['red', 'green', 'blue', 'yellow'];
 * const [colorOne, colorTwo, , colorThree] = colors;
 * console.log(colorOne, colorTwo, colorThree); // Output: red green yellow
 *
 * @note Set in JS is a built-in object that stores unique values.
 * Example: new Set([1, 2, 3]) creates a Set object containing three unique values.
 * Sets are iterable and can be destructured like arrays: let [a, b, c] = new Set([1, 2, 3]);
 */
// Destructuring Arrays

// -> In Array destructuring we are not going to change or modified original array.
// -> We can use if with any iterable like string also.
//  Example : let [a,b,c] = 'abc';
// Example : let [one, two, three] = new Set([1, 2, 3]);

/**
 * @iterate_object_with_map
 * Plain objects are not directly iterable with `for...of`, but `Map` is iterable.
 * So we can convert object -> Map using `Object.entries()`, then iterate it.
 *
 * Steps:
 * 1. Convert object to Map
 * 2. Iterate Map using for...of
 *
 * Example:
 * const user = { name: 'Riya', age: 24, city: 'Pune' };
 * const userMap = new Map(Object.entries(user));
 *
 * for (const [key, value] of userMap) {
 *   console.log(key, value);
 * }
 *
 * We can also iterate only keys/values:
 * for (const key of userMap.keys()) console.log(key);
 * for (const value of userMap.values()) console.log(value);
 *
 * Convert Map back to object:
 * const backToObject = Object.fromEntries(userMap);
 */

// Exercise 1 Question

// const user = { name: 'Riya', age: 24, city: 'Pune' };
// const userMap = new Map(Object.entries(user));

// for (const [key, value] of userMap) {
//   console.log(key, value);
// }

// How Nested Destructuring Works with Example

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ['Cake', 'Donut'],
//   extra: true,
// };

// destructuring assignment split in multiple lines for clarity
// let {
//   size: {
//     // put size here
//     width,
//     height,
//   },
//   items: [item1, item2], // assign items here
//   title = 'Menu', // not present in the object (default value is used)
// } = options;

// alert(title); // Menu
// alert(width); // 100
// alert(height); // 200
// alert(item1); // Cake
// alert(item2); // Donut

// Exercise 2 Question

// const users = {
//   name: 'Suraj',
//   age: 22,
//   city: 'Kanpur',
//   role: 'QA Engineer',
// };

// const { name, age, city, role } = users;
// console.log(`${name} is ${age} years old and lives in ${city}. He works as a ${role}.`);
// Destructure all 4 properties in one line
// Print them in a template literal sentence

// Exrcise 3 Question

// Destructure this mock API response in one line
// const response = {
//   status: 200,
//   data: {
//     userId: 101,
//     profile: {
//       name: 'Suraj',
//       email: 'suraj@example.com',
//     },
//   },
// };
// Access status, userId, name, email — all in one destructuring line

// const {
//   status,
//   data: {
//     userId,
//     profile: { name : profileName, email },
//   },
// } = response;

// console.log(
//   `Status code : ${status} it's user id :${userId} and his name is ${profileName} here is his email :${email}`,
// );
