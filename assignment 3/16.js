//    **Combining Methods:**
// Q16: Create a chain of array methods (`map`, `filter`, `reduce`, etc.) to transform 
// an array of strings into a single concatenated string with a specific condition.

// method 1

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
const resultString = names
  .filter((name) => name.length > 5) // Filter names with length greater than 5
  .map((name) => name.toUpperCase()) // Convert names to uppercase
  .reduce((accumulator, currentName, index, array) => {
    accumulator += currentName;
    if (index < array.length - 1) {
      accumulator += ", "; // Add comma and space between names
    }
    return accumulator;
  }, "");

console.log(resultString);
// Output: "CHARLIE, FRANK"

      // method 2

const arrayOfStrings = ["apple", "banana", "orange", "kiwi", "grape"];
const result = arrayOfStrings
  .filter((str) => str.length > 4) // Filter strings with length greater than 3
  .map((str) => str.toUpperCase()) // Convert each string to uppercase
  .reduce((accumulator, currentStr) => accumulator + currentStr, ""); // Concatenate strings

console.log(result);
// Output: "BANANAORANGEGRAPE"

