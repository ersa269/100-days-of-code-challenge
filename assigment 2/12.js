// Q12: Explain the use of the break and continue statements within loops. Provide 
// scenarios where each might be used.

for (let i = 1; i <= 10; i++) {
    if (i === 4) {
      console.log("Breaking the loop at i = 5");
      break;
    }
    console.log(i);
  }
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      console.log("Skipping iteration at i = 3");
      continue;
    }
    console.log(i);
  }
  