"use strict"

// const number1 = Number(prompt("Inserisci un numero"));
// const number2 = Number(prompt("Inserisci un numero"));
// const number3 = Number(prompt("Inserisci un numero"));
// const number4 = Number(prompt("Inserisci un numero"));
// const number5 = Number(prompt("Inserisci un numero"));
// const number6 = Number(prompt("Inserisci un numero"));
// const number7 = Number(prompt("Inserisci un numero"));
// const number8 = Number(prompt("Inserisci un numero"));
// const number9 = Number(prompt("Inserisci un numero"));
// const number10 = Number(prompt("Inserisci un numero"));

// console.log(number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8 + number9 + number10)



let amount = 0;


for (let i = 0; i < 10; i++) {
    const number = Number(prompt("Inserisci un numero"));
    amount = amount + number;
    
}

console.log(amount)