//      **Sort Method:**
//Q13: Q: Discuss the default behavior of the `sort` method for strings and numbers. 
// How would you use a custom comparison function to sort an array of objects by a specific
// property?

// sort method in string
const strings = ["apple", "banana", "orange", "grape"];
strings.sort();
console.log(strings); // Output: ["apple", "banana", "grape", "orange"]

// sort method in number
const numbers = [8,2, 5, 1];
numbers.sort();
console.log(numbers); // Output: [1, 10, 2, 5]



// sort method in object
const objects = [
    { name: "A", age: 30 },
    { name: "B", age: 25 },
    { name: "C", age: 35 },
  ];
  objects.sort((a, b) => a.age - b.age);
  
  console.log(objects);
  // Output: [{ name: "A", age: 25 }, { name: "B", age: 30 }, { name: "C", age: 35 }]
  