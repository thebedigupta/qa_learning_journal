# Week 1 - Day 1: Variables - Let vs Const

## 📚 What is this about?

Today you learned about two ways to declare variables in JavaScript: **`let`** and **`const`**.

---

## 🔑 Key Concepts

### What is a Variable?

- A variable is a container that stores a value (like a labeled box)
- You can store different types of data: numbers, text, true/false, etc.

---

## ✅ `let` - Changeable Variables

### Definition

`let` creates a variable that **CAN be changed** later.

### Syntax

```javascript
let variableName = value;
```

### Example

```javascript
let numTwo = 14;
console.log(numTwo); // Output: 14

numTwo = 16; // ✅ You can change it!
console.log(numTwo); // Output: 16
```

### Key Points

- ✅ You can **change** the value
- ❌ You **CANNOT** create another variable with the SAME name in the same scope
- Best for values that will change (like a counter, player score, etc.)

---

## ❌ `const` - Unchangeable Variables

### Definition

`const` creates a variable that **CANNOT be changed** after creation.

### Syntax

```javascript
const variableName = value;
```

### Example

```javascript
const numOne = 12;
console.log(numOne); // Output: 12

// numOne = 15;  // ❌ ERROR! Cannot change a const variable
```

### Key Points

- ❌ You **CANNOT change** the value
- ❌ You **CANNOT** create another variable with the SAME name
- Best for values that should NEVER change (like fixed prices, pi value, etc.)

---

## 📊 Comparison Table

| Feature                  | `let`           | `const`      |
| ------------------------ | --------------- | ------------ |
| Can be changed?          | ✅ Yes          | ❌ No        |
| Can be redeclared?       | ❌ No           | ❌ No        |
| Must have initial value? | ❌ No           | ✅ Yes       |
| Use for...               | Changing values | Fixed values |

---

## 💪 Practical Exercise

```javascript
// Exercise: Create variables for user information
const personName = 'Ravi'; // Name never changes
const age = 33; // Age is fixed
const city = 'Siwan'; // City doesn't change
const isStudent = 'true'; // Student status is fixed

// Print using template literals (backticks with ${})
console.log(`My Name is ${personName} and I am ${age} years old.`);
console.log(`I am living in ${city} and I am a student.`);
```

---

## 🎯 When to Use What?

| Use `const` when...                         | Use `let` when...                          |
| ------------------------------------------- | ------------------------------------------ |
| Value should NEVER change (price, name, ID) | Value will change (counter, score, status) |
| You want to prevent accidental changes      | You need to update the value               |
| Creating constants                          | In loops, calculations                     |

---

## ✨ Best Practice

**Default to `const`** → Use `let` only when you know the value will change → Avoid `var` (old style)

---

## 📝 Summary

- **`let`**: Changeable variable (use when value will change)
- **`const`**: Unchangeable variable (use for fixed values)
- Both prevent redeclaring the same variable name
- Use `const` by default, switch to `let` only when needed
