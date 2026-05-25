## TypeScript Interface

TypeScript Interface is a way to check type Safety and we have to create it seperately so that user or reader is not get confused by direct passing type annotations in the function like shown below

```
function getfullName( user = {
firstName : string,
lastName : string,
 ){
 console.log(`Username : ${user.firstName} and ${user.lastname}`
 };
```

 
 Above example look quite difficult to understand and sees to be complicated but when we start define interface first then it becomes easy to read and understand like shown below

```
interface User{
firstName : string;
lastName : string;
};

function getfullName(user : User){
console.log(`User firstName : ${user.firstName} and lastname :${user.lastName}`)
}
```

This is called TypeScript Interface

## Object Destructuring in arguments of function

What we actually did here is we use object destructuring in function argument so that the can use those values directly for writing code in a consie way.

Let me show you with example :

```
interface User {
    firstName : string,
    lastName : string,
}

// Now what we did here is destructure interface in the function argument

const user : User = {
    firstName : 'Kapil',
    lastName : 'Dev',
}

function getfullName({firstName,lastName } : User){
    console.log(`User FirstName : ${firstName} and LastName : ${lastName}`);
    // Above we read properties directly
}
```

## Optional Properties

In this property you have to write a question mark after assigning a data to it's type it simply means that data is optional if it was not given then it will completely fine and nothing going to crash or show error.

Example :

```
interface User{
    firstName : string ,
    middleName? : string,  // here you can see that question mark '?'
    lastName : string,
}

let user : User = {
    firstName : 'Shiv';
    middleName? : 'Kumar';
    lastName : 'Verma';
}

function getfullName(user : User){
    if(User.middleName){
        console.log(`FirstName : ${User.firstName} MiddleName : ${User.middleName} LastName : ${User.lastName}`);
    }
}
```

## Read Only Properties

Interface has few properties which you don't rewrite or modified. It can only read nothing else.

Example :

```
interface User{
    readonly firstName : string;
    middleName? : string,
    lastName : string,
}

let user : User = {
    firstName : 'Suraj',
    midddleName : 'Kumar',
    lastName : 'Gupta',
}

function getfullName(user : User){
    console.log(`FirstName : ${user.firstName}, middleName : '${user.middleName}', lastName : ${user.lastName}`)
}


user.lastName = 'Ravi' // thorw error
```

## Function Types

In the functional types we are telling through interface that what type of data is going to pass as a argument and what kind of data we are expecting to return from the function that we called as function types.

Let's understand with example :

```
interface Add {
    (a : number,b : number ) : number
}

let addNumbers : Add;

addNumbers = function (a,b){return a + b;}


---------------  OR ----------------------

Another way which use in the industry

type Addfunction (a:number,b:number) => number;

let add : Addfunction = (a,b){
    return a + b;
};
```

## Class Types

We understand the exact purpose of implements: it forces a class to obey a strict set of rules. If a class claims it implements Json, it must have a toJson() method, or TypeScript will flat-out refuse to compile it.

```
interface Json {
    toJson(): string;
}

class Person implements Json {
    // 1. The constructor sets up the data
    constructor(private firstName: string, private lastName: string) {}

    // 2. The method lives OUTSIDE the constructor
    toJson(): string {
        return JSON.stringify(this);
    }
}

const person = new Person('John', 'Doe');
console.log(person.toJson());
```

Output :

```
{firstName : 'John', lastName : 'Doe'}
```

## Union Types

We already studied about types but now with the information and knowing about types we can create our own types with the help of operators.

### Union's Type

Union's type is a way through which we can take data in two types with the help of pipe symbol '|' and each type we called as union's member.

Example :

```
let data : string | number;

data = 'Ravi'

console.log(data); // Output Ravi

data = 12

console.log(data); // Output 12

```

## Type Aliases

It is a way through which we create any coustom name for the data.

Let's understand with example :

```
type numString =  number | string;

let primeNumber : numString = 2 ;
let firstName : numString = 'Deva';

```

Above both are right because what we did above is we name two types in one single name which represent both types which maybe string or number. 'numString' has both types 'string' or 'number'. That's why it was not throwing an error.

### Type Aliases are four types

1. Primitive Type

```
type name = string;

let lastName : name = 'Doe';
```

2. Object Type

```
type Person = {
    name : string;
    age : number ;
}

let person : Person = {
    name : 'John',
    age : 30
}
```

3. Union Type

```
type string | number = numString;

let primeNumber : numString = 2;
let firstName : numString = 'John';
```

4. Intersection Type :

Here we are combining two data types

```
type Personal ={
    name : string;
    age : number;
}

type Contact = {
    email : string,
    phone : string,
}

type Candidate = Personal & Contact;

let candidate : Candidate = {
    name : 'John',
    age : 25,
    email : 'john@example.com',
    phone : '9090909090'
};
```

5.  Aliasing Tuples

In tuple alias the size of the tuple is fixed and contain specific type in a particular order.

Example :

```
type RGBcolour = [number,number,number];
let red : RGBcolor = [255,0,0];

console.log(`Red Color ${red}`)
```

---

Function Signature : When we fix what type of parameter we are going to pass in the function and same type of data we get from function (return) then it is called function signature.
