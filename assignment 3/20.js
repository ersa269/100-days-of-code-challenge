//   **Performance Considerations:**
// Q20: Compare the performance implications of using `map` versus `forEach`. In what 
// scenarios would you prefer one over the other, and why?

// map

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

// foreach

const number = [1, 2, 3];
number.forEach((num) => console.log(num));

//comparision

// In modern JavaScript, performance differences between these methods are usually 
// minimal, and the choice often comes down to the specific use case and the intention 
// of the code. If you need the transformed array, map is more semantically appropriate. 
// If you're performing side effects and not concerned about the return values, forEach 
// may be more suitable.



