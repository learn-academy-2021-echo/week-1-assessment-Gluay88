// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: .length is a method to find how many letters in a string, so Echo 2021 has 9 letters including a space


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: l
// b) Verify and explain: [] is find the index (location). index 3 is l


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: It askes for index/position 1 in languages which is Ruby


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: undified, it needs another var name and add .toUpperCase(); then console.log it.
// b) Verify and explain: I was wrong. Array is not string, I can't use .toUpperCase(). Array can be changed to string data .. code down below.

//************** thank you google ***************//

var weekendDays = ["saturday", "sunday"];
//upperC = String(weekendDays).toUpperCase().split(",");
upperC = String(weekendDays).toUpperCase();
console.log(upperC);


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain:  string.length is a method to fine how many letters/characters. So, the type of dataTypes.length is a number.
