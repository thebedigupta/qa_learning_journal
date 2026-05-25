// Exercise 1 : What will this print? Predict first, then run it
let x = 10;
function test() {
  let x = 20;
  console.log(x);
}
test(); // Output : 20
console.log(x); // Output : 10;

// Exercise 2 : Build a formatted test report string using template literals
// Use this data:
const testName = 'Login Test';
const status = 'PASSED';
const duration = 3.5;
const browser = 'Chrome';

// Output should look like:
console.log(
  `Test : ${testName} | Status : ${status} | Duration : ${duration}s | Browser : ${browser}`,
);
// Test: Login Test | Status: PASSED | Duration: 3.5s | Browser: Chrome

// Exercise 3 :
const email = '  Suraj@Example.COM  ';
// Using string methods:
// 1. Remove spaces from both sides
// 2. Convert to lowercase
// 3. Check if it includes "@"
// 4. Replace ".COM" with ".com"
// Print final cleaned email

let completeNewEmail = email.trim().toLowerCase();

if (completeNewEmail.includes('@')) {
  console.log(completeNewEmail);
} else {
  console.log('Invalid email address');
}
