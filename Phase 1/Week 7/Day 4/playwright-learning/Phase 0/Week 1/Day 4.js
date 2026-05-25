// 1. Function declaration

// A function declaration is helpful in doing same task again and again.

// Example : function sumTwo (num1,num2){... code .};

// 2. Local Variables

// If a variable declare inside a functioin then it is only accessible inside the function there is no way through which a external function or anything can access it form outside.

// Example : let firstName = 'Raju';

// function peopleInTheRoom() {
//   let firstName = 'Raju'; // there is no error was showing because global variable is accesible from outside but local variable not accessiable from inside.
// }

// 3. Outer Variables

// This was already we talk about this is those variable which was declare from outside of any scope but in modern code the use of globle varible has to less.

// Parameters

// Parameters are those terms that we write while writing a function.

// Example :

function sumTwo0(a, b) {
  return a + b;
}

// Here a, b is the parameters

// If we pass a value inside a call of function then we called it as arguments.

// Example :

sumTwo0(10, 8); // Here 10,8 is the arguments for a function.

// Default Values : These are those values which we decalre with the parameters for the safety so that when a function call without having arguments then that already declared value is passed in the function like shown below.

// Example :
function sumTwo1(a, b = 0) {}

// console.log(sumTwo(10)); // Here we only pass one argument but the second argument is already defined with default value so it will not give us error and it will return 10 because 10 + 0 = 10

// Returning a value

// A function can return a value but it is not necessary that every function should return a value. If we want to return a value from a function then we have to use 'return' keyword and after that we have to write the value which we want to return.

// Example :

function sumTwo2(a, b) {
  return a + b;
} // If a function is not returning any value then it will return undefined by default.

// console.log(sumTwo(10,8)); // Here we are calling a function and it will return undefined because there is no value to return in the function.

// Note : A function can return only one value but that value can be of any type like string, number, array, object etc. but it can not return two values at a time but we can return an array or object which contains multiple values.

// Example :

function sumTwo3(a, b) {
  return [a, b];
} // Here we are returning an array which contains two values a and b.

// Notes : Implicit return : If we are writing a function in one line then we can omit the 'return' keyword and it will return the value implicitly.

// Exercise 1 :

// Function decalratioin exit after getting value here this = undefined is passed by default

function sumTwoNum(a, b) {
  return a + b;
}

// -> Hoisted (call before definition)
// -> Standard Way to define named functions

// function expression

let sumTwoExpr = function (a, b) {
  return a + b;
};

// -> Not Hoisted (cannot call before decalration)
// -> function stored in a variable.

// Arrow function 

let sumTwoNumber = (a,b) => a + b;

// -> Implicit return 
// -> no function keyword
// -> Shorter Syntax
// -> here this never work it can only access outer lexical enviroment objects or value with 'this' keyword

