//      **Reduce Method:**
// Q14: Describe the purpose of the `reduce` method and provide an example where you 
// use it to compute a single value from an array of numbers.

const numbers = [1, 2, 3, 4, 5];

// Using reduce to compute the sum
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
