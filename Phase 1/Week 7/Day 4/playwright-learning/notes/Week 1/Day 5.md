# Week 1 - Day 5: Arrays & Array Methods

## 📚 What is this about?
Today you learned about **arrays** - storing multiple values in one variable - and common methods to manipulate them.

---

## 🎯 What is an Array?
An **array** is a collection of items stored in a single variable. Each item has a position called an **index** (starting from 0).

### Analogy
Think of an array like a **grocery list**:
- Index 0: Apple
- Index 1: Mango
- Index 2: Banana
- Index 3: Grapes

---

## 📝 Creating Arrays

### Method 1: Square Brackets (Recommended)
```javascript
let fruits = ['Apple', 'Mango', 'Peach', 'Grapes'];
console.log(fruits);  // ['Apple', 'Mango', 'Peach', 'Grapes']
```

### Method 2: new Array() (NOT Recommended)
```javascript
let fruits2 = new Array('Apple', 'Mango', 'Peach');
// Same but longer to write - avoid this
```

### Accessing Array Items
```javascript
let fruits = ['Apple', 'Mango', 'Peach', 'Grapes'];
console.log(fruits[0]);   // Apple (first item)
console.log(fruits[1]);   // Mango (second item)
console.log(fruits[3]);   // Grapes (last item)
```

---

## 🔍 Array Methods

### 1️⃣ `.at()` - Access with Negative Index

#### Definition
Access array items, even with **negative numbers** (counting from end).

#### Syntax
```javascript
array.at(index)
```

#### Examples
```javascript
let fruits = ['Apple', 'Mango', 'Peach', 'Grapes'];

console.log(fruits.at(0));   // Apple (first)
console.log(fruits.at(1));   // Mango
console.log(fruits.at(-1));  // Grapes (last)
console.log(fruits.at(-2));  // Peach (second to last)
```

#### Key Points
- Positive index: count from start
- Negative index: count from end (-1 is last)

---

### 2️⃣ Push & Pop (Stack - LIFO)

#### What is a Stack?
**LIFO** = Last In, First Out (like a stack of plates)

#### `.push()` - Add to End
```javascript
let numbers = [1, 2, 3];
numbers.push(4, 5);  // Add multiple items at the end
console.log(numbers);  // [1, 2, 3, 4, 5]
```

#### `.pop()` - Remove from End
```javascript
let numbers = [1, 2, 3, 4, 5];
let removed = numbers.pop();  // Remove last item
console.log(removed);   // 5
console.log(numbers);   // [1, 2, 3, 4]
```

#### Key Points
- `push()` adds multiple items at once
- `pop()` removes only one item at a time
- Both work on the **end** of the array

---

### 3️⃣ Shift & Unshift (Queue - FIFO)

#### What is a Queue?
**FIFO** = First In, First Out (like a line at a store)

#### `.shift()` - Remove from Start
```javascript
let numbers = [1, 2, 3, 4, 5];
let removed = numbers.shift();  // Remove first item
console.log(removed);   // 1
console.log(numbers);   // [2, 3, 4, 5]
```

#### `.unshift()` - Add to Start
```javascript
let numbers = [1, 2, 3];
numbers.unshift(-1, 0);  // Add multiple items at the start
console.log(numbers);  // [-1, 0, 1, 2, 3]
```

#### Key Points
- `shift()` removes from the **start** (returns removed item)
- `unshift()` adds to the **start** (returns new length)
- Both work on the **beginning** of the array

---

### 4️⃣ `.length` Property

#### Definition
Returns the **number of items** in an array.

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);  // 5

numbers.push(6);
console.log(numbers.length);  // 6

numbers.pop();
console.log(numbers.length);  // 5
```

---

### 5️⃣ `.splice()` - Remove, Replace, or Add

#### Definition
Removes items from array AND can add new items in their place.

#### Syntax
```javascript
array.splice(startIndex, deleteCount, item1, item2, ...)
```

#### Examples
```javascript
let arr = [1, 2, 3, 4, 5];

// Remove 1 item starting at index 2
arr.splice(2, 1);
console.log(arr);  // [1, 2, 4, 5]

// Remove 2 items starting at index 1
arr.splice(1, 2);
console.log(arr);  // [1, 5]

// Add items at index 1 (remove 0 items)
arr.splice(1, 0, 100, 200);
console.log(arr);  // [1, 100, 200, 5]
```

---

## 🔄 Looping Through Arrays

### `for...of` Loop (Recommended)
```javascript
let fruits = ['Apple', 'Mango', 'Peach'];

for (let fruit of fruits) {
  console.log(fruit);
}
// Output: Apple, Mango, Peach
```

### `for` Loop (Traditional)
```javascript
let fruits = ['Apple', 'Mango', 'Peach'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output: Apple, Mango, Peach
```

### `for...in` Loop (NOT Recommended for Arrays)
```javascript
// ❌ Slower and treats array like object - AVOID!
for (let index in fruits) {
  console.log(fruits[index]);
}
```

---

## 🎯 Array Operations Summary

| Operation | Method | Example |
|-----------|--------|---------|
| Add to end | `push()` | `arr.push(4)` |
| Remove from end | `pop()` | `arr.pop()` |
| Add to start | `unshift()` | `arr.unshift(0)` |
| Remove from start | `shift()` | `arr.shift()` |
| Get item | `at()` | `arr.at(-1)` |
| Get count | `.length` | `arr.length` |
| Remove/Replace | `splice()` | `arr.splice(1, 1)` |

---

## 💡 Important Notes
- ❌ **Don't compare arrays with `==`** - Compares reference, not values
- ❌ **Avoid `delete` operator** - Creates holes in array
- Array indices always start at **0**
- `.length` returns count, not highest index
- `for...of` is better than `for...in` for arrays

---

## 💪 Practical Example

```javascript
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.push(6, 7));      // [1,2,3,4,5,6,7]
console.log(numbers.unshift(-1, 0));  // [-1,0,1,2,3,4,5,6,7]
console.log(numbers.pop());           // [-1,0,1,2,3,4,5,6]
console.log(numbers.shift());         // [0,1,2,3,4,5,6]

// Loop through remaining
for (let num of numbers) {
  console.log(num);
}
```

---

## 📝 Summary
1. **Arrays** store multiple values in one variable
2. Index starts at **0** (first item)
3. **`.push()`** adds to end, **`.pop()`** removes from end
4. **`.unshift()`** adds to start, **`.shift()`** removes from start
5. **`.length`** returns number of items
6. **`.splice()`** removes/replaces/adds items
7. Use **`for...of`** to loop through arrays
