//      **Find Method:**
// Q15: How does the `find` method differ from `filter`? Give an example of a scenario
//  where using `find` is more appropriate than `filter`.

// find method

const numbers = [10, 20, 30, 40, 50];
const foundNumber = numbers.find((element) => element > 25);
console.log(foundNumber); // Output: 30

// filter method
const number = [10, 20, 30, 40, 50];
const filteredNumbers = number.filter((element) => element > 25);

console.log(filteredNumbers); // Output: [30, 40, 50]

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  
  // Scenario: Find the user with ID 2
  const userIdToFind = 2;
  const foundUser = users.find(user => user.id === userIdToFind); 
  if (foundUser) {
    console.log('User found:', foundUser);
  } else {
    console.log('User not found.');
  }
  
  

