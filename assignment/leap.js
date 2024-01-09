// Q15:Determine if a year is a leap year or not.

function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapyear(2000)); //  true
console.log(leapyear(2015)); //  false
console.log(leapyear(2016)); //  true
console.log(leapyear(2003)); //  false
console.log(leapyear(2004));  // true
console.log(leapyear(2007));  // false
