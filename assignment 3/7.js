//       **Conditional Filtering:**
// Q7: Implement a function that takes an array of objects with 'age' properties and 
// returns an array of those who are adults (age 18 and above) using the `filter` method.

function getAdults(people) {
    return people.filter(person => person.age >= 18);
  }
  const peopleArray = [
    { name: 'A', age: 25 },
    { name: 'B', age: 17 },
    { name: 'C', age: 30 },
    { name: 'D', age: 16 }
  ];
  const adults = getAdults(peopleArray);
  console.log(adults);
  