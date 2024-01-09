// Q15: Explain the differences between regular functions and arrow functions in terms 
// of scope, this binding, and their use as methods.

const obj = {
  regularMethod: function() {
    console.log(this);
  },
  arrowMethod: () => {
    console.log(this);
  }
};

obj.regularMethod(); 
obj.arrowMethod(); 

  
    