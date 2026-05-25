# Week 2 - Day 6

## Focus

Understanding prototypes, the prototype chain, and what `class` really generates behind the scenes in JavaScript.

## Topics Covered

- What a prototype is
- Prototype chain lookup behavior
- How `class` maps to function + prototype internally
- Hidden class label (`[[IsClassConstructor]]`) and enforced `new`
- Why class methods are non-enumerable
- Strict mode behavior inside classes
- Why methods are stored on prototypes
- Memory benefit of shared prototype methods
- How instance method calls are resolved (`user1.sayHi()` flow)

## Detailed Notes

## What Is a Prototype?

Every JavaScript object has a hidden link to another object, called its prototype.
If a property or method is not found on the object itself, JavaScript looks up that link.

Think of it as asking upward in a family chain:

1. Child object
2. Parent (prototype)
3. Grandparent
4. Continue until found or chain ends

This upward lookup is called the prototype chain.

## What `class` Really Does

When we write:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}
```

JavaScript effectively does this under the hood:

```javascript
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  alert(this.name);
};
```

So `class` is syntax sugar: cleaner syntax over functions + prototypes.

## Why Methods Go on `prototype`

If methods were copied directly onto each instance, creating many objects would duplicate the same function many times.

Example with many users:

```javascript
let user1 = new User('Bedi');
let user2 = new User('John');
let user3 = new User('Alice');
```

Bad approach (method on every object):

- `user1` has its own `sayHi` copy
- `user2` has another `sayHi` copy
- `user3` has another `sayHi` copy
- ...and so on for all instances

Good approach (method on prototype):

- Each instance stores only its own data (like `name`)
- All instances share one `sayHi` function via `User.prototype`

This saves memory and keeps behavior centralized.

## How `user1.sayHi()` Is Found

```javascript
let user1 = new User('Bedi');
user1.sayHi();
```

JavaScript lookup steps:

1. Check if `user1` has `sayHi` directly.
2. If not found, check `user1`'s prototype (`User.prototype`).
3. If found there, execute it.
4. If not, continue up the chain.

That is prototype chain resolution in action.

## Visual Model of `new User("Bedi")`

- `user1.name = "Bedi"` (own property on instance)
- `user1.[[Prototype]] -> User.prototype`
- `User.prototype.sayHi` (shared method)

`[[Prototype]]` is the hidden internal link to the parent object.

## Quick Proof

```javascript
alert(typeof User); // "function"
alert(User.prototype.sayHi); // function definition
```

This confirms:

- `User` is a function internally
- `sayHi` is stored on `User.prototype`

## Three Important Differences: `function` vs `class`

Even though `class` uses prototypes under the hood, it has stricter behavior than regular constructor functions.

## Difference 1: Class Has a Hidden Internal Label

Classes are internally marked as class constructors (`[[IsClassConstructor]]: true`).
Because of this, classes must be called with `new`.

```javascript
function RegularUser() {}

class ClassUser {
  constructor() {}
}

RegularUser(); // works
ClassUser(); // error: class constructor cannot be invoked without 'new'
new ClassUser(); // works
```

Regular functions can run with or without `new`.
Classes enforce object construction with `new`.

## Difference 2: Class Methods Are Non-Enumerable

Enumerable means a property shows up in loops like `for...in`.

With function + prototype style, methods added this way are enumerable by default:

```javascript
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {};

let user = new User('Bedi');

for (let key in user) {
  console.log(key); // name, sayHi
}
```

With class syntax, methods are created as non-enumerable:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {}
}

let user = new User('Bedi');

for (let key in user) {
  console.log(key); // name only
}
```

This is useful because object loops usually should show data fields, not behavior methods.

## Difference 3: Class Bodies Always Use Strict Mode

Code inside classes runs in strict mode automatically, even without writing `'use strict'`.

```javascript
class Demo {
  test() {
    x = 5; // error in strict mode
  }
}
```

Strict mode catches common mistakes early, such as accidental globals and other sloppy patterns.

## Summary Table

| Difference                      | Regular function             | Class                   |
| ------------------------------- | ---------------------------- | ----------------------- |
| Call without `new`              | Works                        | Error                   |
| Method visibility in `for...in` | Prototype methods can appear | Methods are hidden      |
| Strict mode                     | Optional                     | Always on in class body |

## One-Line Recap

- Difference 1: Class enforces `new`; regular functions do not.
- Difference 2: Class methods are hidden from `for...in` loops.
- Difference 3: Class code always runs in strict mode.

These differences are why class syntax is not only cleaner, but also safer and more disciplined.

## One-Line Summaries

- Prototype: Parent object other objects can borrow from.
- `User.prototype`: Place where shared methods are stored.
- Prototype chain: Upward lookup path for missing properties/methods.
- Why prototype: One shared method copy instead of many duplicates.

## In My Own Words

A JavaScript `class` is a cleaner way to write constructor functions plus prototype methods. Instances keep their own data, but share behavior through the prototype chain, which avoids unnecessary memory usage.

## Tomorrow / Next Steps

- Practice with custom prototype methods beyond class syntax.
- Compare prototype inheritance with `extends` in classes.
- Trace a deeper prototype chain using `Object.getPrototypeOf()`.
