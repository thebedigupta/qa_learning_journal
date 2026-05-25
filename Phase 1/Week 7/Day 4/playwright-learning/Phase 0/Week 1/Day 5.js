// Array is a key collection of numbered (indexed) elements. It was designed specifically to store numbered collections of elements, although its underlying structure is based on objects.

// There are two ways to declare array

// 1. let arrayOne = new Array();
// 2. let arrayTwo = [];

// (A) 'at()'

// -> Only condition is it is >= 0.
// -> If it was (negative value) then it start from the end of the array

// Example :

let fruits = ['Apple', 'Mango', 'Preach', 'Grapes'];

fruits.at(-1); // Grapes

fruits.at(1); // Mango

// (B) Methods Pop/Push & Shift/UnShift

// Queue : It is ordered collection of elements which supports two operation push and Shift (FIFO).

// -> Push : Adding element at the end of the array.
// -> Shift : Removing an element from the starting position and moving it's previous element to the first position.

// Stack : It is ordered collection of elements which supports two operation push and pop (LIFO).

// -> Push : Adding element at the end of the array.
// -> Pop : Removing an element from the end position and moving it's previous element to the last position.

// deque : It is ordered collection of elements which supports four operation push, pop, shift and unshift (FIFO and LIFO).

// -> Push : Adding element at the end of the array.
// -> Pop : Removing an element from the end position and moving it's previous element to the last position.
// -> Shift : Removing an element from the starting position and moving it's previous element to the first position.
// -> UnShift : Adding element at the starting position and moving it's previous element to the first position.

// (C) 'length' property

// The length property of an array is a read-only property that returns the number of elements in that array. It is important to note that the length property does not necessarily reflect the number of elements in the array, but rather the highest index plus one. This means that if you have an array with a length of 5, it may contain elements at indices 0 through 4, but it could also contain elements at indices 0, 1, and 4, with indices 2 and 3 being empty or undefined. Therefore, while the length property can give you an

// Notes : Method Push and Unshift add mutiple elements at a time but Pop and Shift only remove one element at a time.

// Example :

let numbers = [1, 2, 3, 4, 5];

numbers.push(6, 7); // [1, 2, 3, 4, 5, 6, 7]

numbers.unshift(-1, 0); // [-1, 0, 1, 2, 3, 4, 5, 6, 7]

numbers.pop(); // [-1, 0, 1, 2, 3, 4, 5, 6]

numbers.shift(); // [0, 1, 2, 3, 4, 5, 6]

// Loop

// Generally, for array we use for of loops but we can also use for...in loop but it is 10 to 100 times slower then for..of loop and for..in treat array like objects and try to get those values which is environment specific and it is not recommended to use for..in loop for array.

// Note : length property of an array means higher value of index + 1. So, if we have an array with length 5, it means that the highest index in that array is 4 (since array indices start at 0). Therefore, the length property can be used to determine the number of elements in the array, but it does not necessarily reflect the actual number of elements present in the array, as there may be empty or undefined elements at certain indices.

// new Array()

// The new Array is not very much preferred and use because square brackets are more shorter then new Array and One more thing if you wanted to create an array with numbers passed in it then it was not created by storing the values in it instead it create empty or holes array which has length 2 but there is nothing in it. So, it is not recommended to use new Array() for creating array with numbers or with any parameters passed in it.

// toString method

// Array have their own toString method which help convert array into comma sepearted numbers.

// let arr = [1, 2, 3];

// console.log(arr);

// console.log(String(arr) === '1,2,3');

// Note : Array only have toString Conversion not like 'valueof' or 'toPrimitive';

// Don't compare array with loose equality opeartor ('==')

// If you try to compare them with that it be check thier reference values is it same or not. Expection null == undefined.

// ---->  Array Methods

// delete arr[1]; // [1, empty, 3] it is good for objects but for array it is not recommended because it create empty or holes in the array and it does not change the length of the array. So, it is not recommended to use delete operator for array.

// splice method is used to remove,replace or add elements in the array and it change the length of the array.

// arr.splice(start[, deleteCount, elem1, ..., elemN])

// Example :

let arr1 = [1, 2, 3, 4, 5];

arr1.splice(2, 1); // [1, 2, 4, 5]

// let arr = ["I", "study", "JavaScript"];

// arr.splice(1, 1); // from index 1 remove 1 element

// alert( arr ); // ["I", "JavaScript"]

// Replacing an element

// let arr = ['I', 'study', 'JavaScript'];

// arr.splice(1, 0, 'am');

// Slice is much more simpler then the splice

// Syntax : arr.slice([start], [end]) // It return new array copying all elements from the precious array from start to end.

// let arr = ["t", "e", "s", "t"];

// alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

// alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

// Note : It create an copy of array so that original array is not affected by the changes arr.slice().

// Concat : It add values of array item by item and return new array without affecting the original array.

// if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:

// Example :

//let arr = [1, 2];

// let arrayLike = {
//  0: "something",
//  1: "else",
//  [Symbol.isConcatSpreadable]: true,
//  length: 2
// };

// alert( arr.concat(arrayLike) ); // 1,2,something,else

// arr.forEach : It run over an array and read it's every element.

// Example :

// let arr2 = ['Bilal', 'Ali', 'Ahmed'];

// arr2.forEach((name) => {
//   console.log(name);
// });

// And this code is more elaborate about their positions in the target array:

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} is at index ${index} in ${array}`);
// });

///// OR

// arr2.forEach((item, index, array) => {
//   `alert ${item} is at index ${index} in ${array}`;
// });

// IndexOf && Includes : These are technically same and they do the same task also but they return different values. Like Indexof return -1 and include return true if it was found.

// Example : indexof(searchElement, fromIndex) & incldes (searchElement, fromIndex) both are same.

// Usually in both cases we pass only one parameter that we are looking for but we can also pass second parameter in which we write from. (It means from where to start)

// Note : If we won't need index then includes prefered and indexof is use strict equality operator so that if there is false then it must be false not 0 or something else.

// Find : it searches in the array like objects and return the first element which satisfy the condition and if there is no element which satisfy the condition then it return undefined. It is also similar to filter method but filter return all the elements which satisfy the condition in an array but find return only first element which satisfy the condition.

// Example :

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// let user = users.find(item => item.id == 1);

// alert(user.name); // John

// Note : find gives that item value only but if we want index then findIndex is used and it return index of the first element which satisfy the condition and if there is no element which satisfy the condition then it return -1. It is also similar to filter method but filter return all the elements which satisfy the condition in an array but findIndex return only index of first element which satisfy the condition.

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"},
//   {id: 4, name: "John"}
// ];

// // Find the index of the first John
// alert(users.findIndex(user => user.name == 'John')); // 0

// // Find the index of the last John
// alert(users.findLastIndex(user => user.name == 'John')); // 3

// Filter : It return an array of all the elements which satisfy the condition and if there is no element which satisfy the condition then it return empty array.

// It's syntax is same as find method but it return an array of all the elements which satisfy the condition.

// let users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
//   { id: 4, name: 'John' },
// ];

// let userNumberList = users.filter((user) => user.id < 3);

// console.log(userNumberList.length);

// Map : It perform certain task on every element of the array and gives us a new shiny array without messing with the original array. It's syntax is same as indexof or find method.

// Example : let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6

// In the above example it calculate every element character or length you can say and return new array with those values without affecting the original array.

// Sort

// Exercise 1 : Filter number greater than 50 from the array

let numbers1 = [67, 78, 4, 45, 23, 56, 89, 90];

let findGreater = numbers1.filter((number) => number > 50);

// Exercise 2 : Map array of names to uppercase

let namesArray = ['Rahul', 'Gandi', 'Manmohan', 'Ravi'];

let capitalLetterNames = namesArray.map((name) => name.toUpperCase());

// Exercise 3 : Find name in the array

let namelistArray = ['Rahul', 'Anupama', 'Kunal', 'Sneha'];

let findPerson = namelistArray.find((name) => name === 'Rahul');

let findPerson2 = namelistArray.includes('Rahul');

// Most methods support 'thisArg'

// let's try to understand with an example

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge; // here this is used means it save outer lexical enviroment data in it's back pack
  },
};

let users = [{ age: 16 }, { age: 18 }, { age: 23 }, { age: 30 }];

let userscanJoin = users.filter(army.canJoin, army); // Here we are passing army as the second arguments because we are used army variable canJoin function method and if it wanted to access minAge and maxAge then it was not able to do it without second argument army which tells what is this.maxAge and this.minAge inside canJoin function method.

console.log(userscanJoin);
