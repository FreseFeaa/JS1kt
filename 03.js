const prompt = require('prompt-sync')() 

function calcult(a,b,sign){
    var result; 
    switch (sign) { 
        case ('+'): 
            result = a + b; 
            return result;
        case ('-'): 
            result = a - b; 
            return result;
        case ('/'): 
            if (b != 0) { 
                result = a / b; 
                return result;
            } 
            else { 
                return `Делить на 0 нельзя!`; 
            } 
            
        case ('*'): 
            result = a * b; 
            return result;
        default: 
        return 'Ошибка' ;
    }
}
console.assert(calcult(1,2,'+') === 3);
console.assert(calcult(2,1,'-') === 1);
console.assert(calcult(3,2,'*') === 6);
console.assert(calcult(6,2,'/') === 3);
console.assert(calcult(2,0,'/') === `Делить на 0 нельзя!`);
console.assert(calcult(6,2,'aaa') === 'Ошибка');


const a = +prompt('let a = ') 
const b = +prompt('let b = ') 
const sign = prompt('let sign (+ or - or / or *) = ') 
console.log(calcult(a, b,sign))