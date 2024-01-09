// Q6:Find the index of the first occurrence of a specific element in an array.
  
function find(array,element){
  var result = array.indexOf(element);
  return result;
}

var arr =[20,40,50,60,90];
var Find =60;
var result= find(arr,Find);

console.log("The index of " + Find + " is: " + result);

