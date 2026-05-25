// There are three types of loop

// 1. while loop
// 2. Do while loop (at least one running is necessary either value is true or not)
// 3. For loop (Most used loop)

// 'Break ' and 'Continue' Keywords

// let's try to understand continue keyword with the help of example

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   // What this above line is saying if 'i' is divisible by 2 then skip that number and start another iteration result only odd number will be print
//   console.log(i);
// }

// Note : continue or Break keyword never used with ternary operator is gives error (those once with are not expression)

// firstLoop: for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     if (i === 2) break firstLoop;
//     console.log(`${i} ${j}`);
//   }
//   return `${i} ${j}`;
// }

// console.log('Done'); // When outside loop value  becomes 2 then break both internal and external  because of break statement it jump out from the loop.

//Exercise 1 . Print any table

function printTable(value) {
  for (let i = value; i <= value * 10; i++) {
    if (i % value !== 0) continue;
    console.log(i);
  }
}

// Exercise 2. Print all even number between 1 to 100

function printEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
  }
}

// Exercise 3. Print Star Pattern

function printStar(value) {
  for (let i = 1; i <= value; i++) {
    let star = '';
    for (let j = 1; j <= i; j++) {
      star += '*';
    }
    console.log(star);
  }
}


