/**
 *
 * @The 'Class' Syntax
 *
 *Syntax :
 
 class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}

In JS a class is a type of function, but instead of using the keyword 'function' to initiate it, we use the keyword 'class'. The body of a class is executed in strict mode. Classes are not hoisted, and they are first-class citizens. This means that we can pass them around as values, and we can also return them from functions. The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method. The constructor method is called automatically when a new instance of the class is created.
 *

Note : The methods that we created from class object is flagged with enumerable: false, which means that they will not show up in a for...in loop. This is because the methods are not enumerable, and they are not intended to be used as properties of the class. The methods are intended to be used as functions that can be called on instances of the class.
 */

// Exercise 1:
// Create a class BankAccount with:
// private #balance property
// constructor(owner, initialBalance)
// deposit(amount) method
// withdraw(amount) method — throw error if insufficient funds
// getBalance() method
// Test with deposits and withdrawals
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.owner = 'Suraj';
    this.#balance = initialBalance;
  }

  getBalance() {
    return this.#balance;
  }
  deposit(amount) {
    return (this.#balance += amount);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error('Insufficient Funds');
    }
    this.#balance -= amount;
  }
}

// Exercise 2 :

// Create a parent class Vehicle with:
// constructor(brand, speed)
// describe() method → "Brand: Toyota | Speed: 120kmh"

// Create child class Car extending Vehicle:
// constructor(brand, speed, doors)
// super() to call parent constructor
// describe() override → "Brand: Toyota | Speed: 120kmh | Doors: 4"

// Create child class Motorcycle extending Vehicle:
// constructor(brand, speed)
// describe() override → "Brand: Yamaha | Speed: 150kmh | Type: Motorcycle"

class Vechile {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  describe() {
    console.log(`Brand : ${this.brand} | Speed :${this.speed}kmh`);
  }
}

class Car extends Vechile {
  constructor(brand, speed, doors) {
    super(brand, speed);
    this.doors = doors;
  }
  describe() {
    console.log(
      `Brand : ${this.brand} | Speed :${this.speed}kmh | Doors : ${this.doors}`,
    );
  }
}

class MotorCycle extends Vechile {
  constructor(brand, speed, type) {
    super(brand, speed);
    this.type = type;
  }
  describe() {
    console.log(
      `Brand : ${this.brand} | Speed :${this.speed}kmh | Type : ${this.type}`,
    );
  }
}

const vehicle = new Vechile('Honda', 100);
vehicle.describe();

const car = new Car('Toyota', 120, 4);
car.describe();

const bike = new MotorCycle('Yamaha', 150, 'Sport');
bike.describe();

// Exercise 3 :
// POM Pattern Question

// Build WITHOUT referencing any example:
// BasePage class:
//   constructor(page) — stores page
//   navigate(url) — goes to url
//   getTitle() — returns page title

// LoginPage extends BasePage:
//   private locators for username, password, loginButton
//   login(username, password) method
//   verifyLoginSuccess() method

// This is your first POM implementation
// You will build this exact pattern in Phase 2

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    return await this.page.goto(url);
  }
  async getTitle() {
    return await this.page.title();
  }
}

class LoginPage extends BasePage {
  #usernameField;
  #passwordField;
  #loginButton;

  constructor(page) {
    super(page);
    this.#usernameField = '#username';
    this.#passwordField = '#password';
    this.#loginButton = '#login-btn';
  }

  async login(username, password) {
    await this.page.fill(this.#usernameField, username);
    await this.page.fill(this.#passwordField, password);
    await this.page.click(this.#loginButton);
  }

  async verifyLoginSucess() {
    const title = await this.page.title();
    return title.includes('Dashboard');
  }
}
