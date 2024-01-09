// Q2: **Filter and Map Combination:**
// Take an array of strings, filter out the ones with a length less than 5, and then 
// capitalize the remaining strings using the `map` method.

const originalStrings = ["apple", "banana", "kiwi", "orange", "grape"];
const filteredStrings = originalStrings.filter(str => str.length >= 5);
const capitalizedStrings = filteredStrings.map(str => str.toUpperCase());

console.log(capitalizedStrings);
