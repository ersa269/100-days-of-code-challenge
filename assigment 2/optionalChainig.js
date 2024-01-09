// Q2:2. How does the optional chaining operator (?.) work, and how can it be used to 
// access nested properties of an object?

const user = {
  name: "John",
  address: {
    city: "Karachi",
    zipCode: "50073"
  }
};
const city = user?.address?.city;
console.log(user);


  