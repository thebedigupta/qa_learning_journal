# Week 0 - Day 4

## Focus

Array fundamentals, performance, coercion, and practical array methods.

## Topics Covered

- Array structure, indexing, and `at()`
- Push/pop/shift/unshift and performance trade-offs
- Sparse arrays and internal behavior
- Search and transform methods (`find`, `filter`, `map`, `sort`)

## Detailed Notes

## Table of Contents

- [Array](#array)
- [Use of 'at'](#use-of-at)
- [Methods Push / Pop & Shift / Unshift](#methods-push--pop--shift--unshift)
- [Methods that work with beginning of the Array](#methods-that-work-with-beginning-of-the-array-)
- [Shift](#shift)
- [Unshift](#unshift)
- [Internals](#internals)
- [Performance](#performance)
- [Loops](#loops)
- [Length](#length)
- [new Array()](#new-array)
- [Multidimensional arrays](#multidimensional-arrays)
- [toString](#tostring)
- [Type Coercion](#type-coercion)
- [Don't Compare with '=='](#dont-compare-with-)
- [indexOf and lastIndexOf](#indexof-and-lastindexof)
- [find, findIndex and findLastIndex](#find-findindex-and-findlastindex)
- [Difference between find and filter](#difference-between-find-and-filter)
- [map](#map)
- [sort (half completed)](#sort-half-completed)

## Array

- An Array is another type of object which help to store data in the ordered collection because they have numbering which starts from 0.
- Array store it's data in the squre brackets `[]`.
- It was easy to add or remove data from or in between an array because of commas `,` even reaplcing or accessing them was also an easy task.
- Which is missing in objects like curly brackets `{}` and objects are not used in storing data because it was not providing numbered ordered collection which was provided by array.

Examples :

```
// Stored Collection of numbered Data

Example : let arrayCollection = [1,2,3,armor,spiderman, function ({alert("Hello")})];

// Access data with the help of numbering

Example : console.log(arrayCollection[1] ) // Output 1

// Replacing data in an array

arrayCollection[1] = 'Superman';

console.log(arrayCollection[1]); // Output : Superman


```

## Use of 'at'

In other programming language as you know if you pass -1 or negative values it start counting from right to left in a array.

```
Example :

let negativeArray = [1,2,3,4,5,6,7];

// If you run it was not act as a other programming language.

negativeArray[-1] // Output undefined; Unexpected
```

Here, 'At' comes in the picture and said I can help you use negative and positive numbers together.

I know you might be thinking there is a another way to write it like shown below

```
Example : negativeArray[negativeArray.length - 1] // Output 7
```

But What you said if I say give me second number from ending and there is one more problem with above example is we have to write negativeArray two times which is not very much clean way to do it.

So, Here 'at' comes into play

```
Example :

negativeArray.at(-1) // output 7 (More clean and easy way to write)

negativeArray.at(-2) // Output 6 (Second number from last)

// Even you pass positive values then it act as a normal array counting

negativeArray.at(2) // Output 1
```

## Methods Push / Pop & Shift / Unshift

**Queue** : A collection of data in a array in which Last In First Out Methodologies work. (LIFO)

```
Example :

let array1 = [1,2,3,4,5,6,7,8];

array1.push(9) // Last element in

console.log(array1) // Output 1,2,3,4,5,6,7,8,9

array1.shift() // Output 2,3,4,5,6,7,8,9 (First Element Out)
```

**Stack** : A collection of data in a array in which first in first out methodologies work that we called stack. (FIFO)

```
Example :

let array1 = [1,2,3,4,5,6,7];

array1.push(8) // Output 1,2,3,4,5,6,7,8 (For this 8 is first element)

array1.pop() // Output 1,2,3,4,5,6,7 (For this 8 is first out element)
```

Those array which shows properties like stack and queue are called **deque**.

### Methods that work with beginning of the Array :

#### Shift

In this method you can remove one element from the starting of the array but it has one special properties like after removing first element from array it pulls second element in the first position and place complete array in new position from left to right.

Understand with Example :

```
Example :

let array2 = [1,2,3,4,5,6,7];

console.log(array2.unshift()); // Output 2,3,4,5,6,7
```

What happen above is before shift call. 1 is on the 0 index but after shift method calling 2 is on the index 0, 3 at index of 1 and viceversa.

#### Unshift

This is quite opposite of shift method because here we are going to add any one element from the starting and form a new array.

- It has all properties like shift but after adding element at starting position this move element inside like shown below example :

```
let array2 = [2,3,4,5,6,7,8];

console.log(array2.unshift(1)); // Output 1,2,3,4,5,6,7,8
```

Initially element 2 in the array has index 0 but after unshift call 1 has index 0 and 2 has index 1 and so on.

### Internals

JS array is an object at it's base and it was tweak for the use with counted data collection and that counted data collection is stored in the contingonus memory of the computer if it follow counted data collection rule then it was stored in contignous memory of computer or else if it was failed then it was store in shared data collection which force array of JS to be an object in that situation.

```
Note : Contiguous memory means that the computer allocates a single, unbroken block of physical memory (RAM) for your data.
```

**Rules of array so that it store data in contignous memory of computer and behave like array**

1. You add a string key (e.g., arr.test = 5) : Usually array was made to store numbers but when you store something else then a number then that array downgrade himself and start behave like object and start storing data in the shared memory.

2. You create massive gaps/holes (e.g., arr[0] = 1; arr[1000] = 5;) : When someone try to misbehave with array and giving him free spaces to store the data then that array downgrade himself and convert himself into a **hash table** as shown below example

```
Example :

let array3 = [];

array3[0] = 0;
array3[9999] = 1;
```

Here in the above example as you can see it was first store zero at index `0`. Then second interger at index `9999` position the second value which is 1. It creates a long empty array because array was created to store number so imagine when array started storing number at position `0` and then `9999` all the between spaces filled empty but still they require very much of user ram.So In this case array downgrade himself and start working like object so that it has not to capture that much unncessary ram of user.

### Performance

Unshift and Shift are less performant because they have to do three things :

1. Add an element.
2. Changes index of inserted/removed element.
3. Changes index of other persent elements according to insertion.

Where as Pop and push are blazing fast because they only have to add or remove at the end of the array. They do not have to do much kind of work.

### Loops

We already know about loops so here we discuss things that we don't know about.

As we know `for ..of` loop very much preferred for iteration of loops like array and speciafically when you only want and use value then it was a great choice.

But When you want blazing fast speed then `the recommended choice for array iteration is for..of loop`.

`for .. in`

Ofcourse, I know you might be thinking there is a way also to iterarte array like we know `for...in` loop but generally it was not recommended because it start treat an array like objects and try to know other properties of array which is associated with each array element. Which causes takes more time and in some browsers it was not work correctly instead of counting 1,2,3 sometimes it started counting like 2,1,3.

Which is disaster but still you can use it for accessing other properties and index,value and other stuffs and yes it was not as much fast as much `for..of` loop.

### Length

We all know this property very well so we are not going to explain anything further just tell you what is important here or we don't know.

```
let array1 = [];

array1[123] = 0;

console.log(array1.length) // 124
```

In the above example as you can see we created 0 to 122 empty slots which is invalid for array. Which creates useless memory so we convert it like an hash table(downgrade array) but still count it from 0 that's why we get `124` as value when we do `array1.length`.

**That long `124` length array is called Sparse Array** and when someone try to iterate it with normal loop it shows undefined 123 itmes

### new Array()

This is also a way for creating an array.

```
let arrayOne = new Array(2);

It create's two empty holes in the array like

console..log(arrayOne.length) // 2
```

**Actually it was created two new holes inside that newly created `ArrayOne`**

### Multidimensional arrays

```
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[0][1] ); // 2, the second value of the first inner array
```

### toString

You can create any array into comma seperated string.

```
let arrayOne = [1,2,3];

console.log(String(arrayOne)); // '1,2,3'
```

#### Type Coercion

When JS realise that he can do a simple maths with array then it started looking for a way to make them basic value.
But there is not way to convert them direct mathematical values so **he convert them into strings**.

and, When there is a mathmatical Operation between two numbers it has do one of thing from two.

**1. Addition**

**2. Gluing Together** (Concatenation)

```
If there is an empty array then

[] + 1 = '1'

If there is a string them guiling them together

[1,2] + 1 = '1,21'
```

### Don't Compare with '=='

When you compare two array with loose operator it started treating them as Object.

Let's recall the rules

1. When you compare two objects with loose operator (==) it started looking for same references.

2. If one of the argument is object and other is primitive then it convert the object into primitive

3. There is only one exceptional true which is 'null' and 'undefined'.

**Few more concepts in array with loose operator**

1. When you check two array which reference same value then it is equal.

```
For Example :

let arrayOne = [0];
let arrayTwo = arrayOne;

console.log(arrayTwo == arrayOne); // true
```

2. But When you check who values which store same value with loose operator then it return false.

```
For Example :

let arrayOne = [0];
let arrayTwo = [0];

console.log(arrayTwo == arrayOne); // false
```

You might be thinking why because when arrayTwo and arrayOne was created it creaeted two different position in a computer memory weather the data is same but arrayTwo is created location A in computer memory and arrayOne is created location B in computer memory.

Comparision with primitive gives different result here is examples :

1. Empty String

```
console.log([] == 0) // true
```

Because empty string convert into zero so they are equal

2. Data String

```
console.log('0' == '') // false
```

Because both are strings but they are different.

## Array Methods

### Splice

It can help me to remove, delete and add elements in the array.

Syntaz of Splice

```
arr.splice(start[, deleteCount, elem1, ..., elemN])
```

**Start** : From which element you have to start.

**deleteCount** : How many element you wanted to delete.

**elem1** : Place those elements which you wanted to add in the array.

**elemN** : Depend upon user how many element he wanted to add in the array.

```
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]
```

---

There is a another way to delete element also but we don't use because it only delete only it's value and make a hole which cause array downgrade and other elements won't take that remove element space as shown below :

```
let listName = ['I','go','home'];

delete listName[1];

alert(listName[1]); // undefined

alert(listName.length); // 3
```

The array index is still at 3 after deleting one element.

---

**Example of Replacing**

```
let arrayOne = ['I','am','going', 'to', 'home'];

arrayOne.splice(5, 0, 'Shop'); // Replaces 'home' with 'Shop'

alert(arrayOne); // ['I','am','going','to','Shop']
```

Here negative indexes are allowed like shown below :

```

from the above exmaple


arrayOne.splice(-2,2,'for','a','Party') // I am going for a party
```

### slice

It return new copy array from the original one it was more clean then splice.

```

let arrayOne = ['I', 'am', 'going','to','home'];

arrayOne.slice(1,3) // ['am', 'going']
```

### Concat

It simply help in concat values and array. It works like unpack items and then add them into the array as shown below.

Example 1 :

```
let arrayOne = [1,2,3,4];
let arrayTwo = [5,6,7,8];

console.log(arrayOne.concat(arrayTwo)); // 1,2,3,4,5,6,7,8
```

Example 2 :

```
let objectOne = {
    0: 'Something',
    1 : 'else',
    length : 2
}
arrayOne.concat(objectOne) // [1,2,3,4,{0:'Something',1:'else',length:2}]
```

## indexOf and lastIndexOf

Both methods search by value and return index.

- `indexOf(value)` checks from left to right.
- `lastIndexOf(value)` checks from right to left.
- If value is not found, both return `-1`.

```
let nums = [10, 20, 30, 20, 40];

nums.indexOf(20); // 1
nums.lastIndexOf(20); // 3
nums.indexOf(99); // -1
```

## find, findIndex and findLastIndex

These methods take a callback condition.

- `find()` returns the first matching element.
- `findIndex()` returns the index of first matching element.
- `findLastIndex()` returns the index of last matching element.
- If no match: `find()` gives `undefined`, index methods give `-1`.

```
let users = [
  { id: 1, name: 'Aman', active: false },
  { id: 2, name: 'Riya', active: true },
  { id: 3, name: 'Aman', active: true }
];

users.find(user => user.active); // { id: 2, name: 'Riya', active: true }
users.findIndex(user => user.name === 'Aman'); // 0
users.findLastIndex(user => user.name === 'Aman'); // 2
```

## Difference between find and filter

- `find()` returns only first matched element.
- `filter()` returns all matched elements as a new array.
- If no match: `find()` -> `undefined`, `filter()` -> `[]`.

```
let marks = [35, 42, 88, 42, 19];

marks.find(m => m > 40); // 42 (first match only)
marks.filter(m => m > 40); // [42, 88, 42] (all matches)
```

## map

`map()` creates a new array by transforming each element. Original array stays unchanged.

```
let prices = [100, 200, 300];
let withTax = prices.map(p => p + p * 0.18);

console.log(withTax); // [118, 236, 354]
console.log(prices); // [100, 200, 300]
```

## sort (half completed)

Today I completed half of `sort`:

- `sort()` changes original array.
- By default, `sort()` compares as strings (lexicographical order).
- For numbers, we should pass compare function.

```
let nums = [2, 15, 1, 100];

nums.sort(); // [1, 100, 15, 2] (string comparison)

nums.sort((a, b) => a - b); // [1, 2, 15, 100] (ascending numeric)
nums.sort((a, b) => b - a); // [100, 15, 2, 1] (descending numeric)
```

Pending for next revision: sorting objects, stable sort behavior, and `toSorted()`.
