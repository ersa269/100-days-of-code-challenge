//      **Error Handling with Find:**
// Q10: Modify the `find` method to handle the scenario where the desired element is 
// not found, returning a custom default object instead.

function findWithDefault(array, predicate, defaultValue) {
    const result = array.find(predicate);
    return result !== undefined ? result : defaultValue;
  }
  const people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  const person = findWithDefault(people, person => person.id === 4, 
                              { id: -1, name: 'Not Found' });
  
  console.log(person);
  