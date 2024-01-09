// var vowel = ['a','e','i','o','u'];
// var StringLength = vowel.length;

// console.log("The length of the string is: " + StringLength);

// Q2:Count the number of vowels in a given string.

function countVowels(str) {
 
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        
        count++;
      }
    } 
    return count;
  }
  let myString = "Hello, World!";
  let result = countVowels(myString);
  console.log("Number of vowels:", result);
  
