//       **Reduce for Aggregation:**
// Q4: Use the `reduce` method to find the total sum of all even numbers in an array 
// of integers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfEvens = numbers.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}, 0); // 0 is the initial value of the accumulator
console.log(sumOfEvens);
