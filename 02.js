const prompt = require('prompt-sync')() 

function getActivity(temp,weather){
    activity  = 'hiking';
    if (temp >= 25 && weather == "clear"){
        activity = 'golf'
        return activity;
    } else if ((10 <= temp && temp < 25) || weather == "cloudy"){
        activity = 'bowling'
        return activity;
    }  else{
        return activity;
    }
}


console.assert(getActivity(0,'cloudy') === 'bowling');
console.assert(getActivity(30,'clear') === 'golf');
console.assert(getActivity(0,'clear') === 'hiking');
console.assert(getActivity(14,'clear') === 'bowling');

const temp   = +prompt ('Temp =  ') 
const weather = prompt ('Weather (clear/cloudy) =   ') 
console.log(getActivity(temp, weather))

