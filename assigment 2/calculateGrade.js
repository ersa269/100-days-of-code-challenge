// Q6:Create an object named student with properties name, age, and grades. Add a method 
// calculateAverage that calculates the average of the grades.

const student = {
    name: "John Doe",
    age: 5,
    grades: [90, 85, 92, 88, 95],
  
    calculateAverage: function() {
      if (this.grades.length === 0) {
        return "No grades available.";
      }  
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      const average = sum / this.grades.length;
      return average;
    }
  }; 
  // Example usage
  console.log(`Student: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Grades: ${student.grades.join(', ')}`);
  console.log(`Average Grade: ${student.calculateAverage()}`);
  

  