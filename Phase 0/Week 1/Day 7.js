// Build a function that:

// Takes an array of student objects
// Each student has: name and marks[] (5 subjects)
// Calculates average marks for each student
// Filters only passing students (average >= 40)
// Sorts passing students by average — highest first

// Your input data to work with
const students = [
  { name: 'Suraj', marks: [45, 67, 38, 90, 55] },
  { name: 'Priya', marks: [20, 30, 25, 35, 28] },
  { name: 'Rahul', marks: [80, 75, 90, 85, 88] },
  { name: 'Sneha', marks: [40, 42, 39, 45, 50] },
  { name: 'Arjun', marks: [15, 20, 18, 22, 10] },
];

function isStudentsPassed(learners) {
  let passedStudents = [];
  for (let i = 0; i < learners.length; i++) {
    let studentName = learners[i].name;
    let totalMarks = learners[i].marks.reduce((acc, mark) => acc + mark, 0);
    let averageMarks = totalMarks / learners[i].marks.length;
    averageMarks >= 40
      ? passedStudents.push({ average: averageMarks, name: studentName })
      : 'Fail';
  }
  return passedStudents.sort((a, b) => b.average - a.average);
}

console.log(isStudentsPassed(students));


///////////////////////////////// 20 QUESTIONS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// Week 1 — 15 Revision Questions

// Variables + Types + Operators
// Q1. Create 3 variables using const, let, and var. Explain when you would use each one.

// Q2. What will this print and why?
// jsconsole.log(5 == "5");
// console.log(5 === "5");

// Q3. Write a grade calculator — takes marks as input, returns A/B/C/D/F using if/else.

// Loops
// Q4. Print multiplication table of 7 using a for loop.

// Q5. Print all odd numbers between 1-50 using a while loop.

// Q6. Loop through this array using for...of and print each name in uppercase:
// jsconst names = ["suraj", "rahul", "priya"];

// Functions
// Q7. Write the same function that adds two numbers in 3 ways — declaration, expression, and arrow function.

// Q8. Write an arrow function with a default parameter:
// js// greet("Suraj") → "Hello Suraj"
// // greet()        → "Hello Guest"


// Arrays
// Q9. From this array filter all numbers divisible by 3:
// jsconst nums = [3, 7, 9, 12, 14, 18, 21, 25];

// Q10. From this array of names return a new array where each name has "Mr." added before it:
// jsconst names = ["Rahul", "Suraj", "Arjun"];
// // output: ["Mr. Rahul", "Mr. Suraj", "Mr. Arjun"]

// Q11. From this array find the first product that is out of stock:
// jsconst products = [
//   { name: "Pen", inStock: true },
//   { name: "Bag", inStock: false },
//   { name: "Book", inStock: true },
//   { name: "Pencil", inStock: false },
// ];

// Objects
// Q12. Create a car object with brand, model, year, isElectric. Access all properties using dot notation and print a sentence using template literals.

// Q13. Create a nested object employee with a nested department object containing deptName, teamSize, location. Destructure all nested values in one line.

// Q14. From this array of objects sort by age in ascending order:
// jsconst people = [
//   { name: "Rahul", age: 25 },
//   { name: "Priya", age: 19 },
//   { name: "Suraj", age: 30 },
//   { name: "Sneha", age: 22 },
// ];

// Q15. From this array of products:

// Filter products with price below 500
// Map the result to return only names
// Print final array

// jsconst products = [
//   { name: "Pen", price: 20 },
//   { name: "Bag", price: 800 },
//   { name: "Book", price: 300 },
//   { name: "Laptop", price: 50000 },
//   { name: "Pencil", price: 10 },
// ];

// 5 Interview Questions

// IQ1. What is the difference between == and ===? Give one example where they produce different results.

// IQ2. What is the difference between map() and filter()? When would you use each?

// IQ3. What will this output and why?

// jsconst user = { name: "Suraj", age: 22 };

// const { name, age } = user;
// console.log(name, age);

// IQ4. You have this array — find the student with the highest marks without using sort():
// jsconst students = [
//   { name: "Rahul", marks: 88 },
//   { name: "Priya", marks: 72 },
//   { name: "Suraj", marks: 95 },
// ];

// IQ5. What is the difference between find() and filter()? What does each return when nothing matches?