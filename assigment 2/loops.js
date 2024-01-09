//for Loop//

// A for loop repeats until a specified condition evaluates to false. 
// A for statement looks as follows: for (initialization; condition; afterthought)
// statement.

for (let i = 0; i < 5; i++) {
    console.log(i);
  }
 
//  While Loop 

// The while statement creates a loop (araund a code block) that is executed while
// a condition is true . The loop runs while the condition is true . Otherwise it stops.

let a = 6;
while (a < 12) {
  console.log(a);
  a++;
}

// Do While Loop

// The do...while statement creates a loop that executes a specified statement 
//until the test condition evaluates to false. The condition is evaluated after 
//executing the statement, resulting in the specified statement executing at 
//least once.

let i = 40;
do {
  console.log(i);
  i++;
} while (i < 50);
