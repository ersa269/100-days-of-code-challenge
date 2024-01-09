// Q10:Provide an example of using optional chaining within a loop to access a potentially 
// missing property of an object.

const students = [
    { name: 'Alice', grades: { math: 95, english: 88 } },
    { name: 'Bob', grades: { math: 90 } },
    { name: 'Charlie' }
  ];
  for (const student of students) {
    // Accessing potentially missing properties using optional chaining
    const mathGrade = student?.grades?.math ?? 'N/A';
  
    console.log(`${student.name}'s math grade: ${mathGrade}`);
  }
  