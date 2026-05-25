# Week 2 - Day 1: Scope, Template Literals & String Methods

## 📚 What is this about?

Today you learned about **scope** (where variables exist), **template literals** (easier string formatting), and useful **string methods** for manipulation.

---

## 🔍 Understanding Scope

### Local Scope

Variables declared inside a function are **only accessible inside that function**.

#### Example: Local vs Global Scope

```javascript
let x = 10; // Global scope (can be accessed anywhere)

function test() {
  let x = 20; // Local scope (only inside this function)
  console.log(x); // Output: 20 (uses local x)
}

test(); // Output: 20
console.log(x); // Output: 10 (uses global x)
```

#### Key Point

- Each function creates **its own scope**
- Local variables **shadow** (hide) global variables with same name
- After function ends, local variables disappear

---

### Scope Chain

Inner functions can access outer variables, but not vice versa.

```javascript
let global = 'I am global';

function outer() {
  let outerVar = 'I am outer';

  function inner() {
    let innerVar = 'I am inner';
    console.log(innerVar); // ✅ Can access
    console.log(outerVar); // ✅ Can access
    console.log(global); // ✅ Can access
  }

  inner();
  console.log(innerVar); // ❌ ERROR! Cannot access inner's variable
}

outer();
console.log(outerVar); // ❌ ERROR! Cannot access outer's variable
```

---

## 📝 Template Literals (Backticks)

### What are Template Literals?

A modern way to create strings using **backticks** (`) instead of quotes.

#### Syntax

```javascript
`String with ${variable} inside`;
```

### Basic Example

```javascript
let name = 'Suraj';
let age = 25;

// Old way (concatenation)
console.log('My name is ' + name + ' and I am ' + age + ' years old');

// New way (template literal)
console.log(`My name is ${name} and I am ${age} years old`);
// Both output: My name is Suraj and I am 25 years old
```

### Features of Template Literals

1. **Embedded expressions** with `${}`
2. **Multi-line strings** (preserves line breaks)
3. **More readable** than concatenation

### Multi-line Strings

```javascript
let message = `
  Welcome to QA Testing!
  This is line 2
  This is line 3
`;

console.log(message);
// Preserves all line breaks!
```

### Expressions Inside `${}`

```javascript
let a = 5;
let b = 3;

console.log(`${a} + ${b} = ${a + b}`); // 5 + 3 = 8
console.log(`${a > b ? 'a is bigger' : 'b is bigger'}`); // a is bigger
```

---

## 🔤 String Methods

### 1. `.trim()` - Remove Spaces

#### Definition

Removes **whitespace from both ends** of a string.

```javascript
let email = '  Suraj@Example.COM  ';
console.log(email.trim()); // Suraj@Example.COM
```

### 2. `.toLowerCase()` - Convert to Lowercase

```javascript
let text = 'HELLO WORLD';
console.log(text.toLowerCase()); // hello world
```

### 3. `.toUpperCase()` - Convert to Uppercase

```javascript
let text = 'hello world';
console.log(text.toUpperCase()); // HELLO WORLD
```

### 4. `.includes()` - Check if Contains

#### Definition

Returns `true` if string contains the search text.

```javascript
let email = 'suraj@gmail.com';
console.log(email.includes('@')); // true
console.log(email.includes('gmail')); // true
console.log(email.includes('yahoo')); // false
```

### 5. `.replace()` - Replace Text

#### Definition

Replaces **first occurrence** of text.

```javascript
let email = 'Suraj@Example.COM';
console.log(email.replace('COM', 'com')); // Suraj@Example.com

// To replace all, use regular expressions (advanced)
```

### 6. `.split()` - Convert to Array

#### Definition

Splits string into array by a separator.

```javascript
let fruits = 'Apple, Mango, Peach, Grapes';
let fruitArray = fruits.split(', ');
console.log(fruitArray); // ['Apple', 'Mango', 'Peach', 'Grapes']

let chars = 'Hello'.split('');
console.log(chars); // ['H', 'e', 'l', 'l', 'o']
```

### 7. `.slice()` - Extract Part of String

#### Definition

Extract a portion of string (doesn't modify original).

```javascript
let text = 'JavaScript';
console.log(text.slice(0, 4)); // Java (from index 0 to 3)
console.log(text.slice(4)); // Script (from index 4 to end)
console.log(text.slice(-3)); // pts (last 3 characters)
```

---

## 💪 Complete Exercise: Email Cleaning

### Task

Take a messy email and:

1. Remove spaces from both sides
2. Convert to lowercase
3. Check if it includes "@"
4. Replace ".COM" with ".com"
5. Print the cleaned email

### Solution

```javascript
const email = '  Suraj@Example.COM  ';

// Step 1: Trim spaces
let cleaned = email.trim();
console.log(cleaned); // Suraj@Example.COM

// Step 2: Convert to lowercase
cleaned = cleaned.toLowerCase();
console.log(cleaned); // suraj@example.com

// Step 3: Check for @
if (cleaned.includes('@')) {
  console.log('Valid email format');
} else {
  console.log('Invalid email address');
}

// Step 4: Replace .COM with .com
cleaned = cleaned.replace('.COM', '.com');
console.log(cleaned); // suraj@example.com

// All together
let finalEmail = email.trim().toLowerCase().replace('.COM', '.com');
console.log(finalEmail); // suraj@example.com
```

---

## 🎯 Practical Test Report Example

Using template literals for formatted output:

```javascript
const testName = 'Login Test';
const status = 'PASSED';
const duration = 3.5;
const browser = 'Chrome';

console.log(
  `Test : ${testName} | Status : ${status} | Duration : ${duration}s | Browser : ${browser}`,
);
// Output: Test : Login Test | Status : PASSED | Duration : 3.5s | Browser : Chrome
```

---

## 📊 String Methods Quick Reference

| Method          | What it does           | Returns |
| --------------- | ---------------------- | ------- |
| `trim()`        | Remove spaces          | String  |
| `toLowerCase()` | Make lowercase         | String  |
| `toUpperCase()` | Make uppercase         | String  |
| `includes()`    | Check if contains      | Boolean |
| `replace()`     | Replace text           | String  |
| `split()`       | Convert to array       | Array   |
| `slice()`       | Extract part           | String  |
| `charAt()`      | Get character at index | String  |
| `indexOf()`     | Find position          | Number  |

---

## ✨ Key Takeaways

1. **Local scope** protects variables (prevents conflicts)
2. **Template literals** are cleaner than concatenation
3. **`${}`** embeds expressions in strings
4. **String methods** modify or analyze text
5. Methods can be **chained** together: `s.trim().toLowerCase()`

---

## 📝 Summary

- **Scope**: Local scope inside functions is separate from global
- **Template literals**: Use backticks for modern strings with `${}`
- **String methods**: `trim()`, `toLowerCase()`, `includes()`, etc.
- **Chaining**: Call multiple methods in sequence
- Always **trim user input** before processing
