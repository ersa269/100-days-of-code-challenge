//       **Nested Array Operations:**
// Q9: Given an array of arrays containing numbers, use a combination of array methods 
// to flatten the structure and then calculate the sum of all the numbers.

const arrayOfArrays = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8],
    [9]
  ];

const arr = arrayOfArrays.reduce((acc, currentArray) => acc.concat(currentArray), []);
const sum = arr.reduce((total, number) => total + number, 0);
  
console.log(sum);
  