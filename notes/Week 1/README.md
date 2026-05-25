# Week 1: JavaScript Fundamentals

Welcome to Week 1! This week covers the absolute basics of JavaScript - everything you need to start coding.

---

## 📚 Week 1 Overview

| Day | Topic | Key Concepts |
|-----|-------|--------------|
| **Day 1** | Variables | `let` vs `const` |
| **Day 2** | Equality & Grade Calculator | `===` vs `==`, if/else |
| **Day 3** | Loops | for, while, do-while, break, continue |
| **Day 4** | Functions | Declaration, Expression, Arrow |
| **Day 5** | Arrays | Methods: push, pop, shift, unshift, splice |
| **Day 6** | Objects | Properties, nesting, array of objects |
| **Day 7** | Project & Review | Student pass/fail calculator + 15 revision questions |

---

## 🎯 Learning Path

### Phase 1: Foundation (Days 1-2)
Learn how to store and compare data
- Declare variables correctly
- Understand equality operators
- Make basic decisions with if/else

### Phase 2: Control Flow (Days 3-4)
Control program execution
- Repeat code with loops
- Create reusable code with functions
- Choose between 3 function styles

### Phase 3: Data Structures (Days 5-6)
Organize complex data
- Arrays: Ordered collections
- Objects: Key-value pairs
- Combine both for real apps

### Phase 4: Integration (Day 7)
Apply everything together
- Build a real project
- Review through practice questions
- Prepare for Week 2

---

## 💡 Key Principles

### 1. Always Use `const` by Default
```javascript
const name = 'Suraj';  // ✅ Default choice
let counter = 0;        // ✅ Only if value changes
var age = 25;          // ❌ Avoid (old style)
```

### 2. Always Use Strict Equality
```javascript
if (5 === '5') { ... }  // ✅ Correct
if (5 == '5') { ... }   // ❌ Avoid
```

### 3. Prefer `for...of` for Arrays
```javascript
for (let item of array) { ... }  // ✅ Best
for (let item in array) { ... }  // ⚠️ Can work but slower
```

### 4. Use Arrow Functions for Simple Tasks
```javascript
let square = x => x * x;  // ✅ Concise
```

### 5. Organize with Objects
```javascript
let user = { name: 'Suraj', age: 25 };  // ✅ Better than separate variables
```

---

## 📖 File Guide

Each day has a dedicated markdown file:

- [Day 1](Day%201.md) - Variables (let vs const)
- [Day 2](Day%202.md) - Equality & Grade Calculator
- [Day 3](Day%203.md) - Loops (for, while, break, continue)
- [Day 4](Day%204.md) - Functions (Declaration, Expression, Arrow)
- [Day 5](Day%205.md) - Arrays & Array Methods
- [Day 6](Day%206.md) - Objects & Array of Objects
- [Day 7](Day%207.md) - Project & Revision Questions

---

## 🔗 Navigation

- **Next Week**: [Week 2 - Advanced Topics](../Week%202/README.md)
- **All Notes**: [Back to Notes Index](../README.md)

---

## ✨ Tips for Success

### Study Tips
1. **Read the explanation** - Understand the "why", not just "how"
2. **See the examples** - Each concept has multiple examples
3. **Try the code** - Copy examples and run them yourself
4. **Do the exercises** - Break understanding into practice

### Practice Tips
1. Create a test file and run the code
2. Modify examples to understand them better
3. Try to guess the output before running
4. When confused, re-read the concept section

### Debugging Tips
1. Use `console.log()` to see values
2. Read error messages carefully
3. Check for typos (JavaScript is case-sensitive)
4. Verify data types with `typeof`

---

## 🎓 What You'll Know After Week 1

✅ How to declare variables correctly  
✅ How to compare values reliably  
✅ How to control program flow with loops  
✅ How to write reusable functions  
✅ How to organize data with arrays  
✅ How to group related data in objects  
✅ How to combine everything for real problems  

---

## 🚀 Ready to Start?

Begin with [Day 1 - Variables](Day%201.md) and progress through each day. Take your time to understand each concept fully - it's better to learn well than to rush!

---

## ❓ Quick Reference

### Variable Comparison
| Keyword | Changeable? | Scope | When to Use |
|---------|-----------|-------|------------|
| `const` | ❌ No | Block | By default (fixed values) |
| `let` | ✅ Yes | Block | When value will change |
| `var` | ✅ Yes | Function | ❌ Avoid (old style) |

### Array Methods at a Glance
| Method | What it does | Returns |
|--------|------------|---------|
| `push()` | Add to end | New length |
| `pop()` | Remove from end | Removed item |
| `shift()` | Remove from start | Removed item |
| `unshift()` | Add to start | New length |
| `filter()` | Keep matching items | New array |
| `map()` | Transform items | New array |
| `sort()` | Sort items | Same array (modified) |

### Quick Function Syntax
```javascript
// Declaration
function add(a, b) { return a + b; }

// Expression
let add = function(a, b) { return a + b; };

// Arrow
let add = (a, b) => a + b;
```

---

Happy Learning! 🎉
