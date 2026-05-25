// Exercise 1 : Create User Object with name, age, email, address

let user = {
  name: 'John Doe',
  age: 30,
  email: ' john@example.com',
  address: '123 Main St, Anytown, USA',
  isActive: true,
};

console.log(
  `User Name is ${user.name} and his age is ${user.age} his email address ${user.email} and is he active ${user.isActive}`,
);

// Exercise 2 : Array of product filter by price

let products = [
  { name: 'fairlovely', Price: 299 },
  { name: 'glowlovely', Price: 399 },
  { name: 'harpic', Price: 49 },
  { name: 'rosewater', Price: 599 },
  { name: 'makeupKit', Price: 600 },
];

let pricelessThen = products.filter((product) => product.Price < 500);

console.log(pricelessThen);

// Exercise 3 : Nested Address Object

let person = {
  fname: 'John',
  lname: 'Doe',
  phone: 1122334455,
  Adress: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'USA',
    zip: '12345',
  },
};

console.log(person.Adress.city);
