// Questions for Week 4

/*

*
*/

// 1. Two Sum
function twoSum(nums, target) {
  for (let [index, value] of nums.entries()) {
    for (let i = index + 1; i < nums.length; i++) {
      if (value + nums[i] === target) {
        return [index, i];
      }
    }
  }
  return 'No valid pair found';
}

// 2. Reverse String

function reverseString(stringArray) {
  let newArray = [];
  for (let i = stringArray.length - 1; i >= 0; i--) {
    newArray.push(stringArray[i]);
  }
  return newArray;
}

// FizzBuzz Question

function fizzBuzz(numberArray) {
  let newArray = [];
  for (let number of numberArray) {
    if (number % 3 === 0 && number % 5 === 0) {
      newArray.push('FizzBuzz');
    } else if (number % 5 === 0) {
      newArray.push('Buzz');
    } else if (number % 3 === 0) {
      newArray.push('Fizz');
    } else {
      newArray.push(number);
    }
  }
  return newArray;
}

// Valid Parentheses

// function validParentheses(string) {
//   let stack = [];
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
//       console.log(string[i]);
//     } else {
//       console.log(stack - 1);
//     }
//   }
// }

// validParentheses(stringValue);
let stringValue = '[{())]}';

const matchingPair = {
  ')': '(',
  '}': '{',
  ']': '[',
};

function validParenthesis(string) {
  let temporaryStack = [];
  for (let element of string) {
    if (element === '(' || element === '{' || element === '[') {
      temporaryStack.push(element);
    } else if (element === ')' || element === '}' || element === ']') {
      const expectedPair = matchingPair[element];
      if (string[temporaryStack.length - 1] === expectedPair) {
        temporaryStack.pop();
      }
    }
  }
  return temporaryStack.length === 0 ? true : false;
}

validParenthesis(stringValue);

// Palindrome

let s = 'A man, a Plan, a canal: Panama';

function validPalindrome(string) {
  // Removes everything except letters and numbers
  let cleanedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let tempString = [];
  for (let i = cleanedString.length - 1; i >= 0; i--) {
    tempString.push(cleanedString[i]);
  }
  return cleanedString === tempString.join('') ? true : false;
}

validPalindrome(s);
