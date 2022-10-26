
"use strict"

const arrayE = [];


for (let i = 0; i < 6; i++) {
    const number = Number(prompt("Inserisci un numero"));
    if (number % 2 === 0){
        arrayE.push(number)
    }

    console.log(arrayE)
}