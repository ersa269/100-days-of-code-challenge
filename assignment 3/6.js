//       **Chaining Methods:**
// Q6: Create a chain of array methods to find the average of all positive numbers in 
// an array of mixed integers and return the result rounded to two decimal places.


const mixedArray = [5, -2, 10, -3, 8, 4, -1, 7];
const averagePositive = mixedArray
  .filter(number => number > 0)          // Filter out negative numbers
  .reduce((sum, number, index, array) =>   // Sum the positive numbers
    sum + number / array.length, 0)
  .toFixed(2);                            // Round to two decimal places

console.log(" Average of positive numbers: "+ averagePositive);
