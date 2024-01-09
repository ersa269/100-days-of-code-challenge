// Q3:Compare the for...in loop and the for...of loop in terms of their use cases and 
// the types of values they iterate over.

// for...in with an object
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}

// Using for...of with an array
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value);
}
