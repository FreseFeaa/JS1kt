const prompt = require('prompt-sync')() 

function getRuss(range){
switch (range){ 
    case 'month': 
    return 'месяц'; 

    case 'day': 
    return 'день'; 

    case 'week': 
    return 'неделю'; 

    default: 
    return 'Не верный ввод'; 

}
}
console.assert(getRuss('month') === 'месяц');
console.assert(getRuss('day') === 'день');
console.assert(getRuss('week') === 'неделю');
console.assert(getRuss('AAAAAAAAAAAAAAAA') === 'Не верный ввод');


const price  = +prompt ('Скок рублей?  ') 
const range = prompt ('month/day/week  ')
 
switch (range){ 
    case 'month': 
    console.log(`${price} Р в ${getRuss(range)}`) 
    break; 
    case 'day': 
    console.log(`${price} Р в ${getRuss(range)}`) 
    break; 
    case 'week': 
    console.log(`${price} Р в ${getRuss(range)}`) 
    break; 
    default: 
    console.log(`Не верный ввод`) 
    break; 
}