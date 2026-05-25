// Question : Find the number which repeat Odd Number of times ?
// Example : [1,2,3,2,3,3,3] Output 1 ;
// Because 1 is repeat one time which is odd number

function findOdd(A) {
  let oddNumber = {};

  for (let value of A) {
    // Here it check is it already stored in oddNumber Object or not for looking inside Object we have to write 'name of Object[checking value]'

    if (oddNumber[value]) {
      oddNumber[value]++;
    } else {
      // If it was not seen inside oddNumber Object then increase its value inside Object.
      oddNumber[value] = 1;
    }
  }
  for (let value in oddNumber) {
    // Pick every Object value and see which one is an odd one
    if (oddNumber[value] % 2 !== 0) {
      return Number(value);
    }
  }
}

// If you want to check the count, you have to use that label to look it up, like this: oddNumber[value].

// If value is "3", then oddNumber["3"] gives you the count: 4.
// Now that you know a for...in loop only grabs the keys (the names of the numbers)
// and not the values, you can use that key to look up the value in the object. So, for each key (which is a number in string form), you check if its count is odd, and if so, return it as a number.