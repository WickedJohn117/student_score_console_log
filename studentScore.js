//Task 1 Student Profile//

let firstName = "John";
console.log(`First name (Original):${firstName}`);

firstName = "Johnny"
console.log(`First Name: ${firstName}`);

let lastName ="Jackson";
console.log(`Last Name: ${lastName}`);

let age = 16;
console.log(`Age: ${age}`);

let studentId = "STU-00175";
console.log(`Student ID: ${studentId}`);

const gpa = 3.72;
console.log(`GPA: ${gpa}`);

let isEnrolled = true;
console.log(`Is Enrolled:${isEnrolled}`);

let graduationDate = null;
console.log(`Graduation Date: ${graduationDate}`);

//Task 2 Operators//

let totalScore = 0;
let studentTest1 = 45;
let studentTest2 = 30;

totalScore += studentTest1;
console.log(`Total Score After Test 1:${totalScore}`);

totalScore += studentTest2;
console.log(`Total Score After Test 2: ${totalScore}`);

totalScore -= 5;
console.log(`Five Marks Deducted From Total Score: ${totalScore}`);

totalScore *= 2;
console.log(`Total Score Doubled: ${totalScore}`);

totalScore ++;
console.log(`1 Added to Total Score: ${totalScore}`);

console.log(`Total Score Modulo 7:${totalScore % 7}`);


//Task 3 : Type Conversion//
//Using parseInt because studentAge needs to be a Whole Number, no decimals//
let studentAge = "19";
let convertedAge = parseInt(studentAge);
console.log(`Student Age: ${convertedAge}, Type: ${typeof convertedAge}`);

//Using parseFloat because examScores needs to be a Decimal number//\
let examScore = "74.5";
let convertedScore = parseFloat(examScore);
console.log(`Exam Score: ${convertedScore}, Type: ${typeof convertedScore}`);

//Using Number() to convert the variable string to a digit/./
let passMark = "50";
let convertedMark = Number(passMark);
console.log(`Pass Mark: ${convertedMark}, Type: ${typeof convertedMark}`);

//using string() to convert the number to a string//
let studentName = 101;
let convertedName = String(studentName);
console.log(`Student Name: ${convertedName}, Type: ${typeof convertedName}`);


console.log(`Is Exam Score above Pass Mark? ${convertedScore > convertedMark}`);

///Task 4 --Conditional Statement == If/Else statements//

// Test 1: score = 85 (Grade A)
// let score = 85;

// Test 2: score = 55 (Grade C)
// let score = 55;

// Test 3: score = 38 (Grade F)
let score = 38;

if (score >= 70) {
  console.log(`Score: ${score} | Grade: A — Distinction`);
} else if (score >= 60) {
  console.log(`Score: ${score} | Grade: B — Merit`);
} else if (score >= 50) {
  console.log(`Score: ${score} | Grade: C — Pass`);
} else if (score >= 40) {
  console.log(`Score: ${score} | Grade: D — Near Pass`);
} else {
  console.log(`Score: ${score} | Grade: F — Fail`);
}