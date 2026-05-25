## enums

It is a group of contants values.

Mainly it is used in HTTP status

Examples:

```
enums Priority {
    High : 'HIGH',
    Medium: 'MEDIUM',
    LOW : 'Low'
}

enums TestStatus {
    Pass = 'PASS',
    Fail = 'FAIL',
    Skip = 'Skip',
    Blocked = 'Blocked'
}

let result : TestStatus = TestStatus.Pass
console.log(result); // PASS
```

How we are going to use 'enums' in Previous Day learning

```
interface TestCase {
    readonly id : number;
    title : string;
    status : TestStatus;
    priority : Priority;
}

const tc : TestCase = {
    id : 'TC-001',
    title : 'Login with valid credentials',
    test : TestStatus.Pass   // here we used what we created with the help of enums
    priority : Priority.High,
}
```

As I told you it is mainly used in HTTP with code

```
enums HttpStatus {
OK = 200,
Created = 201,
BadRequest = 400,
Unauthorized = 401,
NotFound = 404,
ServerError = 500
}

function checkStatus(code : HttpStatus):string{
    if(code === HttpStatus.OK || code === HttpsStatus.created){
        return 'Success';
    }
    return 'Failed';
}
```

## TypeScript Type Inference

Type Inference is the feature of typescript in which user don't have to tell typescript about the type through annotate. TypeScript is smart enough to guess the type that you are giving to the function, classes whatever it may be.

Let's understand this with example :

```
function getRandomElement(items){
    const indexofElement = Math.floor(Math.Random() * items.length);
    return item[indexofElement];
}

As you can see above example we didn't mention about type anywhere but when we pass parameter is automatically get it what it means.

let array = [1,2,3,4,5];
console.lo(getRandomElement(array)); // here it automatically guess the type of array.
```

Another simple example :

```
let number = 0;
```

In the above example you do not have to explicitly mention that it is number. TypeScript automatically guess it's type.

### What Happen when there is two type of data in the array.

First, it check out is complete array is number or string if that array contain both then it puts label on that array as `(number | string)`. As we know Pipe symbol is know for 'OR'.
So it started treating that array as both number and string both types.

Let's understand with example :

```
let array = [1,2,3,4,'Cheese'];
```

Now TypeScript look at this array and check all it's elements

```
1 = number
2 = number
3 = number
4 = number
Cheese = String  // When it hit on cheese it started seeing as string and then mark that array as (string | number )[]
```

So you can do both things with array

```
array.push(6)      // Done
array.push('Tofu') // Done

array.push(true)   // Error
```

It was able to push number and string because that array was declare as number OR string but not boolean that's why it throws error.

```
Note : In practice, you should always use the type inference as much as possible. You use the type annotation in the following cases:

- When you declare a variable and assign it a value later.
- When you think TS doesn't have a clue to guess the type.
- When a function return to any type then you need to clarify the value.

```

### Contextual Typing

Contextual typing occurs when TypeScript uses the context (or location) of where a variable is used to automatically infer its type. This saves us from having to write explicit type annotations.

Example :

```
document.addEventListener('click',function(event){
    console.log(event.button);
})
```

Here TypeScript know that a mouse event is going to happen not any keypress from the keyboard so that it can thorw error when something else was happen.

## Generics

It simply help to create reusable and generalized form of function, classes and interface.

**Undertstand with Simple Ananlogy**

Suppose you need room every time to store something and suppose right now you want room for storing string in it and after some time you want room for storing number in it should creating room evey time form stratch is good idea obviusly no we need a factory when we call it makes a romm for us according to demand then it gives us a room in which we can store anything like if we said we want to store string then that factory make a room instantly for storing room. Generics is doing the same thing for it create a function,class or interface or whatever it maybe it makes that function for that string array or number array whatever user demand.

Example :

```
let numArray = [1,2,3,4,5];
let sentenceArray = ['Cheese','Cream','fruits','vegetables'];

function getRandomNumber(item){
    const indexofNumber = Math.floor(Math.Random() * items.length);
    return items[indexofNumber];
}
```

Here if we pass numArray then with the help of inference that function take number Array and gives number only if we pass stringArray then it only takes string Array and gives string Array means same function and same alogorithm but uses depend upon user demand.

Syntax :

```
function getRandomNumber<T>(item : T[]):T{
    const indexofNumber = Math.floor(Math.Random() * items.length);
    return items[indexofNumber];
}
```

### Generic functions with multiple types

It means you can work with two types and combine their properties so that the return that you can get is resamble to both type of objects.

```
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}
```

### Generics Type Constraints

Type Contraints are used in generics for putting constraints on parameter that we are going to pass in a function as parameter.

Example :

```
function whatIslength<T extends {length : number}>(x : T,y : T){
    if(x.length >= y.length){
        return 'x is larger then y'
    }else{
        return 'x is smaller than y'
    }
}

const ans = whatIslength([4,0], [8,9,2]);
console.log(ans) // Output : x is smaller then y
```

If you want x and y both are different type then you have to declare them seperately like shown below :

```
function whatIslength<T extends {length : number}, U extends {length:number}> (x : T, y : U) {
    return x.length > y.length; }
```

Let's look another Example :

```
function merge<T extends Object, V extends Object >(x : T ,y : V){
    return {
        Object1,Object2
    };
}

let person = (
    {name : 'John'},{age : 25} // here both parameters are objects
)
```

### Another way of doing

What actually we did in this type parameter is we bound the key to accept those parameter which is persent in the object as value.

Example :

```
let obj1 = {name : 'John';}
function prop< obj1 , name keyof obj1 >(obj1 : T, K :name){
    return return obj1[key]
}

console.log(prop(obj1,'name');) // Output : John
```

Below is the syntax :

```
function prop<T, K extends keyof T>(obj : T ,key : K) {
    return obj[key];
}
```

## Generic Class

Generic class has a generic type parameter list in angle brackets `<>`and then the className.

Syntax :

```
class className<T>{
    // ....
}
```

- You can pass multiple type parameter like shown below

```
class className <T,K>{
    // ... syntax
}
```

- Generics class also complie with generic constraints.

```
class className <T extends TypeA>{}
```

Let's try to make a generics stack class but before that let's talk what it stack. Stack is where elements are stored in a serial wise manner like in buffet and Stack also follow LIFO principle `(first-in-first-out)` means that data is going to add first in the array are going to be the first one if someone try to remove element from the array that we called as stack.

```
class Stack<T>{
    private elements : T[] = [];

    constructor(private size : number){}

    isEmpty():boolean {
       return this.elements.length === 0;
    }
    ifFull():boolean{
        return this.elements.length === this.size;
    }
    push(element:T):void{
        if(this.elements.size === this.size){
            throw new Error (`Stack is overflow`)
        }
        this.elements.push(element);
    }
    pop(element : T){
        if(this.element.size === 0){
            throw new Error(`Stack is empty`);
        }
        return this.elements.pop();
    }
}
```
