//    **Error Handling:**
// Q18: How would you handle potential errors when using array methods like `find` or 
// `reduce`? Provide an example of error handling in such a scenario.


// find

const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((element) => element > 10);
// Check if an element is found, otherwise provide a default value
if (foundNumber !== undefined) {
  console.log("Found number:", foundNumber);
} else {
  console.log("No number greater than 10 found.");
  // Provide a default value or handle the error as appropriate
}


// reduce

// const number = [];

// // Attempt to find the sum of numbers using reduce
// const sum = number.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// // Check if the array is empty, otherwise provide a default value
// if (number.length === 0) {
//   console.log("Array is empty. Using default value for sum.");
//   // Provide a default value or handle the error as appropriate
// } else {
//   console.log("Sum of numbers:", sum);
// }
