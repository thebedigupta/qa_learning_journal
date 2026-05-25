// 1. Strict Equality Checker (===)

// Strict equality checker makes sure that the value has both things same like it's type and it's actual value.

//Example :

console.log(2 === '2'); // ❌ it return false because it checks both thing value and type. Value is definitely is 2 but it it's type was string and another number type was 2 and it was a number.
console.log(2 === 2); // ✅ it return true because both value and type are same.

// Loose Equality Checker (==)

// Loose equality checker check only one thing either value is same or type. Then it return true which create an unpredictied result that why most developers prefer strict equality checker.

// Example :

console.log(2 == '2'); // ✅ It returns true because it make sure that any one value is correct

// 2. Grade Calculator for all boundaries value

// Q. Make a program that grade students based on the marks they are getting

function gradeSystem(totalMarks) {
  return totalMarks < 0 || totalmarks > 100
    ? 'Number Should be between 0 and 100'
    : calculateGrade(totalMarks);

  function calculateGrade(totalmarks) {
    if (totalMarks >= 90) return 'A';
    if (totalMarks >= 80) return 'B';
    if (totalMarks >= 70) return 'C';
    if (totalMarks >= 60) return 'D';
    return 'F';
  }
}

console.log(`Grade: ${gradeSystem(90)}`);
