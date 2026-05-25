# Week 1 - Day 3: Loops (for, while, do-while) & Loop Control

## 📚 What is this about?

Today you learned about **loops** - a way to repeat code multiple times - and **loop control keywords** (`break` and `continue`).

---

## 🔁 What is a Loop?

A loop repeats a block of code multiple times without writing it over and over again.

---

## 3️⃣ Types of Loops

### 1️⃣ `for` Loop (Most Used)

#### Definition

Repeats code a **specific number of times**.

#### Syntax

```javascript
for (initialization; condition; increment / decrement) {
  // code to repeat
}
```

#### Example: Print 1 to 5

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5
```

#### How It Works

1. `let i = 1` → Start with i = 1 (initialization)
2. `i <= 5` → Keep looping WHILE i is less than or equal to 5 (condition)
3. `i++` → After each loop, add 1 to i (increment)

---

### 2️⃣ `while` Loop

#### Definition

Repeats code **while a condition is true**.

#### Syntax

```javascript
while (condition) {
  // code to repeat
  // Make sure condition becomes false eventually
}
```

#### Example

```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++; // Don't forget this! Otherwise infinite loop!
}
// Output: 1, 2, 3, 4, 5
```

#### Key Point

- You must manually update the condition variable, otherwise it's an **infinite loop**!

---

### 3️⃣ `do-while` Loop

#### Definition

**Always runs at least once**, then checks the condition.

#### Syntax

```javascript
do {
  // code to repeat (runs at least once)
} while (condition);
```

#### Example

```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
// Output: 1, 2, 3, 4, 5
```

#### When to Use

- When you need the loop to run **at least one time**
- Less common than `for` or `while`

---

## 🛑 Loop Control Keywords

### `continue` - Skip to Next Iteration

#### Definition

Skips the **current iteration** and jumps to the next one.

#### Syntax

```javascript
if (condition) continue;
```

#### Example: Print Only Odd Numbers

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // Skip even numbers
  console.log(i); // Only print odd numbers
}
// Output: 1, 3, 5, 7, 9
```

#### How It Works

- Check: Is `i` divisible by 2 (even)?
- If YES → `continue` (skip the console.log)
- If NO → Print the number

---

### `break` - Exit the Loop

#### Definition

**Stops the loop immediately** and exits.

#### Syntax

```javascript
if (condition) break;
```

#### Example: Stop When You Find 5

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break; // Stop at 5
  console.log(i);
}
// Output: 1, 2, 3, 4
```

---

## 💪 Practical Exercises

### Exercise 1: Print Multiplication Table

```javascript
function printTable(value) {
  for (let i = value; i <= value * 10; i++) {
    if (i % value !== 0) continue;
    console.log(i);
  }
}

printTable(7); // Output: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70
```

### Exercise 2: Print Even Numbers (1 to 100)

```javascript
function printEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) continue; // Skip odd numbers
    console.log(i);
  }
}

printEven(1, 10); // Output: 2, 4, 6, 8, 10
```

### Exercise 3: Print Star Pattern

```javascript
function printStar(value) {
  for (let i = 1; i <= value; i++) {
    let star = '';
    for (let j = 1; j <= i; j++) {
      star += '*';
    }
    console.log(star);
  }
}

printStar(5);
// Output:
// *
// **
// ***
// ****
// *****
```

---

## 🔄 Nested Loops

### What is a Nested Loop?

A loop **inside another loop**.

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
// Outer loop runs 3 times, inner loop runs 3 times = 9 total iterations
```

---

## 📊 Loop Comparison Table

| Type       | When to Use                        | Example                        |
| ---------- | ---------------------------------- | ------------------------------ |
| `for`      | When you know HOW MANY times       | `for (let i = 0; i < 10; i++)` |
| `while`    | When condition changes during loop | Waiting for user input         |
| `do-while` | When it MUST run at least once     | Menu systems                   |

---

## ⚠️ Important Notes

- ❌ **Don't use `break`/`continue` with ternary operators** - Gives error!
- 🔁 `continue` → Skip current iteration, go to next
- 🛑 `break` → Stop loop completely
- 📍 **Nested loops**: Outer loop controls, inner loop repeats for each outer cycle

---

## 🎯 Key Takeaways

1. **`for` loop** is the most common
2. **`continue`** skips the current iteration
3. **`break`** stops the entire loop
4. Nested loops are useful for patterns and multi-dimensional data
5. Always make sure conditions will eventually become false!

---

## 📝 Summary

- Loops repeat code efficiently
- `for` loop: best when you know the count
- `while` loop: best for conditions
- `continue` skips current iteration
- `break` exits the loop
