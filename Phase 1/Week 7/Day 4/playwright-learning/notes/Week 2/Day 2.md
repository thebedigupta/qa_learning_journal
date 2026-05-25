# Week 2 - Day 2: Destructuring (Arrays & Objects)

## 📚 What is this about?

Today you learned **destructuring** - a cleaner way to extract values from arrays and objects without repeated code.

---

## 🎯 What is Destructuring?

**Destructuring** is unpacking values from arrays or objects and assigning them to variables in one line.

### Real-World Analogy

Instead of unpacking a box item by item, destructuring lets you take all items at once!

---

## 📦 Array Destructuring

### Basic Example

```javascript
// Without destructuring
let colors = ['red', 'green', 'blue', 'yellow'];
let colorOne = colors[0];
let colorTwo = colors[1];
let colorThree = colors[2];

// With destructuring (one line!)
let [colorOne, colorTwo, colorThree] = colors;

console.log(colorOne); // red
console.log(colorTwo); // green
console.log(colorThree); // blue
```

### Skipping Elements

You can skip elements by leaving gaps:

```javascript
let colors = ['red', 'green', 'blue', 'yellow'];

// Skip 'green' (second element)
let [first, , third] = colors;

console.log(first); // red
console.log(third); // blue (skipped green)
```

### Getting Remaining Elements with `...`

The **rest operator** captures remaining elements:

```javascript
let numbers = [1, 2, 3, 4, 5];

let [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

### With Strings (Iterables)

Can destructure any iterable (strings, sets, etc.):

```javascript
let [a, b, c] = 'abc';
console.log(a, b, c); // a, b, c

let [x, y, z] = new Set([1, 2, 3]);
console.log(x, y, z); // 1, 2, 3
```

---

## 🏢 Object Destructuring

### Basic Example

```javascript
// Without destructuring
let user = { name: 'Suraj', age: 22, city: 'Kanpur', role: 'QA Engineer' };

console.log(user.name);
console.log(user.age);

// With destructuring (extract what you need)
let { name, age, city, role } = user;

console.log(name); // Suraj
console.log(age); // 22
console.log(city); // Kanpur
console.log(role); // QA Engineer
```

### Renaming During Destructuring

```javascript
let user = { name: 'Suraj', age: 22 };

// Rename 'name' to 'userName'
let { name: userName, age } = user;

console.log(userName); // Suraj
console.log(name); // ❌ ERROR! name doesn't exist
```

### Default Values

```javascript
let user = { name: 'Suraj' };

// Set default if property doesn't exist
let { name, age = 25, city = 'Unknown' } = user;

console.log(name); // Suraj
console.log(age); // 25 (default)
console.log(city); // Unknown (default)
```

### Extracting Nested Objects

```javascript
let employee = {
  name: 'Suraj',
  salary: 50000,
  department: {
    deptName: 'QA',
    teamSize: 5,
    location: 'Delhi',
  },
};

// Extract nested properties directly
let {
  name,
  department: { deptName, location },
} = employee;

console.log(name); // Suraj
console.log(deptName); // QA
console.log(location); // Delhi
```

---

## 🗺️ Converting Objects to Maps & Iterating

### Why Convert to Map?

Plain objects are **not iterable** with `for...of`, but **Maps are iterable**.

### Converting Object → Map → Back to Object

#### Step 1: Object to Map

```javascript
const user = { name: 'Riya', age: 24, city: 'Pune' };

// Convert to Map
const userMap = new Map(Object.entries(user));

console.log(userMap);
// Map { 'name' => 'Riya', 'age' => 24, 'city' => 'Pune' }
```

#### Step 2: Iterate Map with for...of

```javascript
for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Riya
// age: 24
// city: Pune
```

#### Step 3: Iterate Only Keys or Values

```javascript
// Only keys
for (const key of userMap.keys()) {
  console.log(key);
}
// Output: name, age, city

// Only values
for (const value of userMap.values()) {
  console.log(value);
}
// Output: Riya, 24, Pune
```

#### Step 4: Convert Map Back to Object

```javascript
const backToObject = Object.fromEntries(userMap);
console.log(backToObject);
// { name: 'Riya', age: 24, city: 'Pune' }
```

---

## 🔗 Nested Destructuring

### Complete Example

```javascript
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['Cake', 'Donut'],
  extra: true,
};

// Extract nested values in one line
let {
  size: { width, height }, // Extract from nested object
  items: [item1, item2], // Extract from array
  title = 'Menu', // Default value (not in object)
} = options;

console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut
console.log(title); // Menu (default)
```

---

## 💪 Practical Exercise: API Response Parsing

### Scenario: Process API Data

```javascript
const apiResponse = {
  status: 200,
  data: {
    userId: 101,
    userName: 'Raju',
    profile: {
      email: 'raju@example.com',
      city: 'Delhi',
    },
  },
  message: 'Success',
};

// Extract all needed data in one line
let {
  status,
  data: {
    userId,
    userName,
    profile: { email, city },
  },
} = apiResponse;

console.log(`${userName} (ID: ${userId})`); // Raju (ID: 101)
console.log(`Email: ${email}, City: ${city}`); // Email: raju@example.com, City: Delhi
```

---

## 📊 Comparison: Before vs After Destructuring

### Array Access - Before

```javascript
const users = ['Suraj', 'Rahul', 'Priya'];
const user1 = users[0];
const user2 = users[1];
const user3 = users[2];
```

### Array Access - After

```javascript
const users = ['Suraj', 'Rahul', 'Priya'];
const [user1, user2, user3] = users;
```

### Object Access - Before

```javascript
const user = { name: 'Suraj', age: 22, city: 'Kanpur' };
console.log(user.name);
console.log(user.age);
console.log(user.city);
```

### Object Access - After

```javascript
const user = { name: 'Suraj', age: 22, city: 'Kanpur' };
const { name, age, city } = user;
console.log(`${name} is ${age} years old and lives in ${city}`);
```

---

## 🎯 Key Takeaways

1. **Array destructuring** extracts multiple values at once: `let [a, b] = arr`
2. **Skip elements** with empty commas: `let [a, , c] = arr`
3. **Object destructuring** extracts properties: `let { name, age } = obj`
4. **Rename properties** during extraction: `let { name: userName } = obj`
5. **Nested destructuring** works for complex structures
6. **Maps are iterable** - convert objects to Maps for for...of loops
7. **Rest operator** (`...`) captures remaining elements

---

## 📝 Summary

- **Destructuring** unpacks values from arrays/objects into variables
- **Arrays**: Extract by position with `[]`
- **Objects**: Extract by name with `{}`
- **Defaults**: Provide fallback values
- **Nesting**: Extract from deep structures
- **Maps**: Use for iterating object key-value pairs
