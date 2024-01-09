// Q14:Find the maximum of three numbers using nested ternary operators.

function findMax(a, b, c) {
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
  }
  var result = findMax(20,16, 25);
  console.log("The maximum number is: " + result);
  