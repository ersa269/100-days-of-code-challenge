//      **Sorting Objects:**
// Q3: Given an array of objects with a 'price' property, use the `sort` method to 
// arrange them in descending order based on their prices.

const products = [
    { name: 'Smartphone', price: 800 },
    { name: 'Headphones', price: 150 },
    { name: 'Tablet', price: 500 },
    {name: 'Laptop', price: 1200 }
  ];
  const sortedProducts = products.sort((a, b) => b.price - a.price);
  
  console.log(sortedProducts);
  