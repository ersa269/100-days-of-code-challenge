// Q13:Check if a number is even or odd and return a corresponding message

function checkEvenOrOdd(number) {
    var message = (number % 2 === 0) ? "Even" : "Odd";
    return message;
  }

  var result = checkEvenOrOdd(12);
  console.log("The number is " + result);