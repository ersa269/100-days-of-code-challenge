//       **Find and Modify:**
// Q5: Given an array of objects with 'id' properties, use the `find` method to locate 
// an object with a specific 'id' and update its 'status' property to 'completed'.

const arrayOfObjects = [
    { id: 1, status: 'pending' },
    { id: 2, status: 'in progress' },
    { id: 3, status: 'pending' },
    { id: 4, status: 'in progress' },
  ];
const targetId = 3;
const newStatus = 'completed';
const targetObject = arrayOfObjects.find(obj => obj.id === targetId);
  if (targetObject) {
    targetObject.status = newStatus;
  
    console.log('Object updated:', targetObject);
    console.log('Updated array:', arrayOfObjects);
  } else {
    console.log('Object with id', targetId, 'not found.');
  }
  