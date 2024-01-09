// Q5:Explain the concept of "closures" in JavaScript and provide an example of their 
// practical use.

function outerFunction(outerVariable) {
    // Inner function declared inside the outer function
    function innerFunction(innerVariable) {
      // Accessing variables from the outer function's scope
      console.log("Outer Variable:", outerVariable);
      console.log("Inner Variable:", innerVariable);
    } 
    return innerFunction;
  } 
  const closureInstance = outerFunction("Hello"); 
  closureInstance("World");
  