const prompt = require('prompt-sync')() 
word = `a`
function funcresult(word){
    var result; 
    let wordLength = word.length;
    let squareRoot = (Math.sqrt(wordLength));
    if (Number.isInteger(squareRoot) == true){
        result = 1
        return result;
    } else {
        result = 0
        return result;
    }
}

console.assert(funcresult('a')===1);
console.assert(funcresult('aaa')===0);
console.assert(funcresult('aaaa')===1);
console.assert(funcresult('aaaaa')===0);

console.log(funcresult(word))