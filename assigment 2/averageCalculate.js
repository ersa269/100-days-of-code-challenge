// Q4:Define a function calculateAverage that takes an array of numbers as an argument 
// and returns the average value. 

function calculateAverage(numbers) {
    // Check if the array is not empty
    if (numbers.length === 0) {
      return 0; // Return 0 for an empty array
    } 
    // Calculate the sum of numbers using reduce
    const sum = numbers.reduce((acc, num) => acc + num, 0); 
    // Calculate the average by dividing the sum by the number of elements
    const average = sum / numbers.length; 
    return average;
  } 
  const numbersArray = [5, 10, 15, 20];
  const averageValue = calculateAverage(numbersArray);
  console.log(averageValue);
  