"use strict"


const numbers = [1,2,3,4,5,6]

let sum = 0

for (let i = 0; i < numbers.length; i++) {

    if(i % 2 !== 0){
    sum = sum + numbers[i];
    
    }
}

console.log(sum)