// Q11:Write a for...in loop that iterates over the properties of an object and logs each 
// property name and value.

const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (let property in myObject) {
    if (myObject.hasOwnProperty(property)) {
      console.log(" Property: " + property + " Value: " + myObject[property]);
    }
  }

  