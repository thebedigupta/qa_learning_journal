# Week 0 - Day 3

## Focus

Functions, IIFE, classes, method chaining, and closures.

## Topics Covered

- IIFE (Immediately Invoked Function Expression)
- Class constructor and validator pattern
- Method chaining with `return this`
- Data flow through validation rules and closures

## Detailed Notes

## IIFE

Immediately Invoked Function Expression (IIFE)

An IIFE is a function in JavaScript that runs **right away** as soon as it is created.
You define the function inside parentheses, and then add `()` at the end to execute it immediately.

Why it is useful:

- It keeps variables private (inside the function)
- It avoids polluting the global scope

```
Example:
(function () {
const message = "Hello from IIFE!";
console.log(message);
})();
```

Immedately Invoked Functional Expression

## JavaScript Classes & Method Chaining (The Validator Pattern)

### 1. The Class Constructor (The Setup)

When you call `new PasswordValidator()`, the `constructor()` function runs automatically.

- It acts as the initial setup for the object.
- `this.rules = []` and `this.errors = []` create empty arrays (memory storage) specifically for that one instance of the object.

### 2. Method Chaining & `return this`

If a method ends with `return this;`, it hands the entire object (the "machine") back to you after it finishes running.

- **Why it matters:** Because you get the object back, you can instantly attach another method to it.
- **Example:** `validator.addRule(A).addRule(B)`
- **The Danger:** If you forget `return this;`, the method returns `undefined`. Trying to chain a method onto `undefined` will instantly crash the app.

### 3. Execution Loops & Data Flow

When looping through an array of functions (like validation rules):

1. The loop grabs the worker function: `rule = minLength(8)`
2. It executes the worker by passing the data: `result = rule(password)`
3. The worker returns a data object: `{ valid: false, message: "Too short" }`
4. We extract the message from that object using dot notation: `this.errors.push(result.message)`

### 4. Prototypes (Placeholder)

_To be reviewed: How JavaScript wires methods to objects efficiently without wasting memory._

## In my own words:

Functions are reusable blocks of code. Arrow functions are shorter but don't
have their own 'this'. Closures let functions remember variables from where
they were created - this creates private variables. Higher-order functions
take or return functions, enabling composable code like my password validator.

## Key breakthrough:

The password validator uses rule factories - functions that return validation
functions. This makes rules reusable and composable. Each rule closure
remembers its configuration (like min length).

## What was hard:

Understanding why `var` in loops breaks but `let` works. The key is scope:
var is function-scoped (one variable), let is block-scoped (new each iteration).

## Tomorrow:

Arrays and objects - data structures for organizing test data and configurations.
