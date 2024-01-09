//    **Filter Method:**
// Q12: Explain the purpose of the `filter` method. Provide an example where you use
// `filter` to extract elements from an array based on a specific condition.

// The filter method in JavaScript is used to create a new array by filtering out elements
// from an existing array based on a specified condition. It does not modify the original
// array; instead, it returns a new array containing only the elements that meet the 
// specified condition.

const numbers = [5, 10, 15, 20, 25, 30];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
