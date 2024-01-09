//       **Map Method:**
// Q11: How does the `map` method work in JavaScript, and can you provide an example 
// of when you might use it to manipulate an array of objects?

const students = [
    { id: 1, name: 'A', grade: 85 },
    { id: 2, name: 'B', grade: 92 },
    { id: 3, name: 'C', grade: 78 }
  ];
  
  // Use map to create a new array of objects with an additional property 'status'
  const studentsWithStatus = students.map(student => {
    return {
      ...student,         
      status: student.grade >= 80 ? 'Pass' : 'Fail' // Add a new property based on a condition
    };
  });
  
  console.log(studentsWithStatus);
  