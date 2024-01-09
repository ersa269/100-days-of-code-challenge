// Q7:How can you clone an object in JavaScript and also give one example each deep copy, 
// shallow copy, and reference copy

// Shallow copy
const Shallow = { name: "John", age: 24, scores: [90, 85, 95] };
const shallowCopy = Shallow

console.log(shallowCopy);         

// Deep copy 
const deep = { name: "John", age: 25, scores: [90, 85, 95] };
const deepCopy = deep;

console.log(deepCopy);

// Reference copy
const originalObject = { name: "John", age: 26, scores: [90, 85, 95] };
const referenceCopy = originalObject;
console.log(referenceCopy);
