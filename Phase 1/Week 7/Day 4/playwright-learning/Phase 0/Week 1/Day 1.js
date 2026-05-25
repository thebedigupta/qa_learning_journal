// Difference Between let and const

// let : It can help you to declare variable and change it's value as many times as much you can but you can not create another variable with the same name.

let numTwo = 14;

numTwo = 16; // it was acceptable ✅

console.log(numTwo);

// const : It also help you to create variable but you can't change it's value also.
const numOne = 12;

// numOne = 'Bedi'; // It was not acceptable it thorws error ❌

console.log(numOne);

// Exercise

const personName = 'Ravi';
const age = 33;
const city = 'Siwan';
const isStudent = 'true';

console.log(
  `My Name is ${personName} and I am ${age} years old. I am living in ${city} and I am ${isStudent ? 'not a student.' : 'a student.'} `,
);
