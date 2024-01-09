//    **Callback Functions:**
// Q17: Explain the concept of callback functions in the context of array methods. Provide 
// an example of using a callback function with the `map` method.

const numbers = [1, 2, 3, 4, 5];

// Callback function to square each number
const square = (num) => num * num;
const squaredNumbers = numbers.map(square);

console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]
