# Week 1 - Day 4: Functions - Declaration, Expression & Arrow

## 📚 What is this about?
Today you learned about **functions** - reusable blocks of code. You learned 3 ways to create functions!

---

## 🎯 What is a Function?
A function is a **reusable block of code** that performs a specific task. Instead of writing the same code over and over, write it once in a function and call it many times!

---

## 📝 Function Basics

### Parameters vs Arguments
- **Parameters**: Variable names in the function definition
- **Arguments**: Actual values passed when calling the function

```javascript
function greet(name, age) {  // name, age are PARAMETERS
  console.log(`Hello ${name}, you are ${age} years old`);
}

greet('Suraj', 25);  // 'Suraj', 25 are ARGUMENTS
```

---

## 3️⃣ Ways to Create Functions

### 1️⃣ Function Declaration (Named Function)

#### Definition
The traditional way to create a function using the `function` keyword.

#### Syntax
```javascript
function functionName(param1, param2) {
  // code to execute
  return value;  // optional
}
```

#### Example
```javascript
function sumTwo(a, b) {
  return a + b;
}

console.log(sumTwo(10, 8));  // Output: 18
```

#### Key Points
- ✅ Can be **hoisted** (called before definition)
- Used most commonly
- Clear and easy to read

#### What is Hoisting?
```javascript
console.log(add(5, 3));  // ✅ Works! (12)

function add(a, b) {
  return a + b;
}
// Function declarations are "lifted" to the top
```

---

### 2️⃣ Function Expression (Stored in Variable)

#### Definition
Store a function inside a variable.

#### Syntax
```javascript
let functionName = function(param1, param2) {
  // code to execute
  return value;
};
```

#### Example
```javascript
let sumTwoExpr = function(a, b) {
  return a + b;
};

console.log(sumTwoExpr(10, 8));  // Output: 18
```

#### Key Points
- ❌ **NOT hoisted** (cannot call before definition)
- Function is stored in a variable
- Must define before calling

#### Hoisting Example (WRONG)
```javascript
console.log(add(5, 3));  // ❌ ERROR! add is not defined yet

let add = function(a, b) {
  return a + b;
};
```

---

### 3️⃣ Arrow Function (Modern & Shorter)

#### Definition
A newer, shorter syntax using `=>` (arrow).

#### Syntax (Normal)
```javascript
let functionName = (param1, param2) => {
  // code to execute
  return value;
};
```

#### Syntax (Shorthand - Implicit Return)
```javascript
let functionName = (param1, param2) => value;
```

#### Example
```javascript
// Normal arrow function (explicit return)
let sumTwo = (a, b) => {
  return a + b;
};

// Shorter version (implicit return)
let sumTwoShort = (a, b) => a + b;

console.log(sumTwo(10, 8));       // Output: 18
console.log(sumTwoShort(10, 8));  // Output: 18
```

#### Key Points
- ✨ **Shorter syntax** - Less code to write!
- **Implicit return** - No need for `return` keyword on one-liners
- ❌ Never hoisted
- Variable-based (like function expression)

#### Arrow Function Variations
```javascript
// Arrow function with 1 parameter (parentheses optional)
let square = x => x * x;

// Arrow function with NO parameters
let greet = () => 'Hello!';

// Arrow function with multiple lines (need curly braces + return)
let add = (a, b) => {
  let sum = a + b;
  return sum;
};
```

---

## 🔧 Local Variables

### Definition
Variables declared **inside a function** are only accessible inside that function.

```javascript
function testScope() {
  let firstName = 'Raju';  // Local variable
  console.log(firstName);  // ✅ Works inside function
}

console.log(firstName);    // ❌ ERROR! Not accessible outside
```

---

## 📤 Return Statement & Default Values

### Return Statement
A function **returns a value** back to where it was called.

```javascript
function add(a, b) {
  return a + b;  // Send value back
}

let result = add(5, 3);
console.log(result);  // Output: 8
```

### Functions with NO Return
```javascript
function greet(name) {
  console.log(`Hello ${name}`);
  // No return statement → returns undefined
}

let result = greet('Suraj');
console.log(result);  // Output: undefined
```

### Default Parameters
If you don't pass a value, use a default.

```javascript
function greet(name = 'Guest') {
  console.log(`Hello ${name}`);
}

greet();           // Output: Hello Guest
greet('Suraj');    // Output: Hello Suraj
```

---

## 🎯 Quick Comparison

| Type | Syntax | Hoisted? | Best For |
|------|--------|----------|----------|
| Declaration | `function name() {}` | ✅ Yes | Normal use |
| Expression | `let fn = function() {}` | ❌ No | Passing as value |
| Arrow | `let fn = () => {}` | ❌ No | Short callbacks |

---

## 💪 Complete Example

```javascript
// 1. Declaration
function sumTwo0(a, b) {
  return a + b;
}

// 2. Expression
let sumTwo1 = function(a, b) {
  return a + b;
};

// 3. Arrow
let sumTwo2 = (a, b) => a + b;

// All three work the same way!
console.log(sumTwo0(5, 3));  // 8
console.log(sumTwo1(5, 3));  // 8
console.log(sumTwo2(5, 3));  // 8
```

---

## ✨ Key Tips
- ✅ Use **arrow functions** for simple, one-line operations
- ✅ Use **function declarations** for named, reusable functions
- Always add a **return statement** if you need a value back
- Remember: Variables inside a function are **local**
- Arrow functions **cannot use `this` correctly** (advanced topic)

---

## 📝 Summary
1. **Functions** are reusable blocks of code
2. **3 ways to create**: Declaration, Expression, Arrow
3. **Parameters** are placeholders, **Arguments** are actual values
4. Functions **return values** with the `return` keyword
5. Variables inside functions are **local** (only accessible inside)
