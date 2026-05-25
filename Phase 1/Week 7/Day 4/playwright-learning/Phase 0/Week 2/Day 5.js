// Exercise 1 :

// Write a function validateUser(user) that:
// throws error if name is missing
// throws error if age is less than 18
// throws error if email doesn't include "@"
// returns "User is valid" if all checks pass
// Test with both valid and invalid users using try/catch

// const user1 = {
//   name: 'John',
//   age: 25,
//   email: ' bedigupta@gmail.com ',
// };

// function validateUser(user) {
//   if (!user.name) {
//     throw new Error('name is missing');
//   }
//   if (user.age < 18) {
//     throw new Error('Age is less then 18');
//   }
//   if (!user.email.trim().includes('@')) {
//     throw new Error('@ is missing in the email');
//   }
//   return 'User is Valid';
// }

// try {
//   const result = validateUser(user1);
//   console.log(result);
// } catch (err) {
//   console.log(`Errors Caught : `, err.message);
//   console.log('User is not valid');
// }

// Exercise 2 :
// 1. Create a user object with name, age, city, isActive
// 2. Convert it to JSON string and print it
// 3. Parse it back to object
// 4. Add a new property "role" to parsed object
// 5. Stringify again and print final result

// Bonus: Simulate an API response string — parse it and
// access nested fields
// const apiResponse =
//   '{"status":200,"data":{"userId":101,"name":"Suraj","orders":["Order1","Order2"]}}';

// // 1. Create a user object with name, age, city, isActive

// const user2 = {
//   name: 'Suraj',
//   age: 30,
//   city: 'Delhi',
//   isActive: true,
// };

// // 2. Convert it to JSON string and print it

// const objectString = JSON.stringify(user2);
// console.log(objectString);

// // 3. Parse it back to object

// const stringObject = JSON.parse(objectString);
// console.log(stringObject);

// // 4. Add a new property 'role' to parsed object.
// stringObject.role = 'Engineer';
// console.log(stringObject);

// // 5. Stringify Again and print final result
// const user3 = JSON.stringify(stringObject);
// console.log(user3);

// // Bonus Challenge

// const res = JSON.parse(apiResponse);
// console.log(res);
// console.log(res.data.name);

// Exercise 3 : Optional Chaining and Nullish

// Given this inconsistent data from an API:
const users = [
  { name: 'Suraj', address: { city: 'Kanpur' }, age: 22 },
  { name: 'Rahul', address: null, age: null },
  { name: 'Priya' }, // no address, no age
];

// Loop through users and safely print:
// "Name: Suraj | City: Kanpur | Age: 22"
// "Name: Rahul | City: Not provided | Age: Not provided"
// "Name: Priya | City: Not provided | Age: Not provided"
// Use ?. and ?? together

users.forEach((user) => {
  let { name, address, age } = user;
  console.log(
    `Name : ${name} | City : ${address?.city ?? 'Not Provided'} | Age : ${user?.age ?? 'Not Provided'}`,
  );
});
