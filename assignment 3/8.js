//        **Advanced Sorting:**
// Q8: Sort an array of strings based on their lengths in ascending order. If two 
// strings have the same length, maintain their relative order in the sorted array.


const arrayToSort = ["apple", "banana", "orange", "kiwi", "grape", "pear"];
const sortedArray = arrayToSort.sort((a, b) => a.length - b.length);

console.log(sortedArray);
