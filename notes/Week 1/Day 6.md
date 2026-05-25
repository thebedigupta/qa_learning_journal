# Week 1 - Day 6: Objects & Object Methods

## 📚 What is this about?
Today you learned about **objects** - storing related data together with properties and values.

---

## 🎯 What is an Object?
An **object** is a collection of **key-value pairs**. It groups related information together.

### Real-World Example
```
Person Object:
  name: "John"
  age: 30
  email: "john@example.com"
```

---

## 📝 Creating Objects

### Basic Syntax
```javascript
let objectName = {
  property1: value1,
  property2: value2,
  property3: value3
};
```

### Example: User Object
```javascript
let user = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
  address: '123 Main St, Anytown, USA',
  isActive: true
};
```

---

## 🔍 Accessing Object Properties

### Dot Notation (Most Common)
```javascript
let user = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
};

console.log(user.name);    // John Doe
console.log(user.age);     // 30
console.log(user.email);   // john@example.com
```

### Bracket Notation
```javascript
console.log(user['name']);   // John Doe
console.log(user['age']);    // 30
```

### When to Use Bracket Notation
- Property name has spaces: `obj['first name']`
- Property name is stored in variable: `obj[variableName]`

---

## ✏️ Modifying Objects

### Adding New Properties
```javascript
let user = {
  name: 'John'
};

user.age = 30;          // Add age property
user['email'] = 'john@example.com';

console.log(user);  // {name: 'John', age: 30, email: 'john@example.com'}
```

### Changing Existing Properties
```javascript
let user = {
  name: 'John',
  age: 30
};

user.age = 31;  // Change age from 30 to 31
console.log(user);  // {name: 'John', age: 31}
```

### Deleting Properties
```javascript
let user = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};

delete user.email;
console.log(user);  // {name: 'John', age: 30}
```

---

## 📊 Array of Objects

### Definition
An **array containing multiple objects**.

### Example: Product List
```javascript
let products = [
  { name: 'fairlovely', Price: 299 },
  { name: 'glowlovely', Price: 399 },
  { name: 'harpic', Price: 49 },
  { name: 'rosewater', Price: 599 },
  { name: 'makeupKit', Price: 600 }
];

console.log(products[0]);        // {name: 'fairlovely', Price: 299}
console.log(products[0].name);   // fairlovely
console.log(products[0].Price);  // 299
```

---

## 🔍 Filtering Array of Objects

### Filter Products by Price
```javascript
let products = [
  { name: 'fairlovely', Price: 299 },
  { name: 'glowlovely', Price: 399 },
  { name: 'harpic', Price: 49 },
  { name: 'rosewater', Price: 599 },
  { name: 'makeupKit', Price: 600 }
];

// Get products with price less than 500
let pricelessThen = products.filter((product) => product.Price < 500);

console.log(pricelessThen);
// Output: [
//   {name: 'fairlovely', Price: 299},
//   {name: 'glowlovely', Price: 399},
//   {name: 'harpic', Price: 49}
// ]
```

---

## 🏢 Nested Objects

### Definition
An **object inside another object**.

### Example: Person with Address
```javascript
let person = {
  fname: 'John',
  lname: 'Doe',
  phone: 1122334455,
  address: {              // Nested object
    street: '123 Main St',
    city: 'Anytown',
    state: 'USA',
    zip: '12345'
  }
};

// Accessing nested properties
console.log(person.fname);              // John
console.log(person.address);            // {street: '123 Main St', ...}
console.log(person.address.city);       // Anytown
console.log(person.address.street);     // 123 Main St
```

### Accessing Deeply Nested Data
```javascript
let person = {
  name: 'Suraj',
  contact: {
    email: 'suraj@example.com',
    phone: {
      mobile: 9876543210,
      home: 1122334455
    }
  }
};

console.log(person.contact.phone.mobile);  // 9876543210
```

---

## 🔄 Looping Through Objects

### Using `for...in` Loop
```javascript
let user = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York
```

### Using `Object.entries()`
```javascript
let user = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```

---

## 💾 Useful Object Methods

### Check if Property Exists
```javascript
let user = { name: 'John', age: 30 };

console.log('name' in user);   // true
console.log('email' in user);  // false
```

### Get All Keys
```javascript
let user = { name: 'John', age: 30 };
console.log(Object.keys(user));    // ['name', 'age']
```

### Get All Values
```javascript
let user = { name: 'John', age: 30 };
console.log(Object.values(user));  // ['John', 30]
```

### Get Key-Value Pairs
```javascript
let user = { name: 'John', age: 30 };
console.log(Object.entries(user)); // [['name', 'John'], ['age', 30]]
```

---

## 🎯 Comparison: Array vs Object

| Feature | Array | Object |
|---------|-------|--------|
| Index | Numbers (0, 1, 2, ...) | Text/Names ('name', 'age', ...) |
| Access | `arr[0]` | `obj.name` or `obj['name']` |
| Order | Ordered | Not guaranteed order |
| Best For | Lists, sequences | Related properties |

---

## 💪 Complete Exercise Example

```javascript
// Create User Object
let user = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
  address: '123 Main St, Anytown, USA',
  isActive: true
};

console.log(
  `User Name is ${user.name} and his age is ${user.age}.`
);

// Array of Objects
let products = [
  { name: 'Pen', price: 20 },
  { name: 'Book', price: 150 },
  { name: 'Notebook', price: 50 }
];

// Access specific product
console.log(products[0].name);  // Pen

// Nested Object
let person = {
  name: 'Suraj',
  address: {
    city: 'Delhi',
    zip: '110001'
  }
};

console.log(person.address.city);  // Delhi
```

---

## ✨ Key Takeaways
1. **Objects** store related data with key-value pairs
2. Use **dot notation** to access properties (most common)
3. Use **bracket notation** when property name has spaces/variables
4. **Nested objects** can contain other objects
5. **Array of objects** combines arrays and objects together
6. `Object.keys()`, `Object.values()` get all keys/values
7. `for...in` loop iterates through object properties

---

## 📝 Summary
- Objects group related information together
- Access properties using **dot notation**: `obj.property`
- Objects can be nested: `obj.nested.property`
- Arrays of objects combine arrays with object structure
- Use `for...in` to loop through object properties
