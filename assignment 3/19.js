//      **Immutable Operations:**
// Q19: Discuss the importance of immutability when working with array methods. Demonstrate
// how you would perform immutable operations using methods like `map` or `filter`.

const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 22 },
  ]; 
  // Immutable operation using map to update the age of Alice
  const updatedUsersMap = users.map((user) => {
    if (user.name === 'Alice') {
      return { ...user, age: user.age + 1 };
    }
    return user;
  });
  console.log(updatedUsersMap);
  // Output: [
  //   { id: 1, name: 'Alice', age: 26 },
  //   { id: 2, name: 'Bob', age: 30 },
  //   { id: 3, name: 'Charlie', age: 22 }
  // ]
  
  // Immutable operation using filter to remove Bob
//   const updatedUsersFilter = users.filter((user) => user.name !== 'Bob');
  
//   console.log(updatedUsersFilter);
//   // Output: [
//   //   { id: 1, name: 'Alice', age: 25 },
//   //   { id: 3, name: 'Charlie', age: 22 }
//   // ]
  
//   // Original array remains unchanged
//   console.log(users);
  // Output: [
  //   { id: 1, name: 'Alice', age: 25 },
  //   { id: 2, name: 'Bob', age: 30 },
  //   { id: 3, name: 'Charlie', age: 22 }
  // ]
  