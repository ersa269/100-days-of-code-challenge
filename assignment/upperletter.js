// Q3:Convert the first letter of each word in a sentence to uppercase.

const sentence = "hardwork has no alternative";

function capitalizeEachWord(string){
    const arr = string.split(' ')

    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return arr.join(' ')
}
console.log(capitalizeEachWord(sentence))