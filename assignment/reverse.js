// Q1:Reverse a string without using the built-in reverse() method.

const str = "Javascript";

function reverseStr(str){
    for (let i = str.length - 1; i >= 0; i--) {
        console.log (i, str[i])
    }
}
console.log(reverseStr(str));








// const str="Javascript";

// function rev1(str){
//     for(let i=str.length -1; i>=0; i--){
//         console.log(i,str[i])
//     }
// }
// console.log(rev1(str));