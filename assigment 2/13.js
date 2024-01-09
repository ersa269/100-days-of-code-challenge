// Q13:Write a function calculateTax that calculates and returns the tax amount based 
// on a given income. Use a ternary operator to determine the tax rate.

function calculateTax(income) {
    // Ternary operator to determine the tax rate based on income
    const taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.2 : 0.3;
    const taxAmount = income * taxRate;
    return taxAmount;
  }
  const income1 = 45000;
  const income2 = 75000;
  const income3 = 120000;
  
  console.log(`Tax for income ${income1}: ${calculateTax(income1)}`);
  console.log(`Tax for income ${income2}: ${calculateTax(income2)}`);
  console.log(`Tax for income ${income3}: ${calculateTax(income3)}`);
  