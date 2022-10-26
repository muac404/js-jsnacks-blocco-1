
"use strict"

const nome = prompt("Scrivi il tuo nome")
const listaInvitati = [ "Stefano", "Simona", "Elisabetta" ]


for (let i = 0; i < listaInvitati.length; i++) {
    const element = listaInvitati[i];
    if (nome === element){
        alert("Puoi partecipare alla festa!")
    } else {
        alert("Non puoi partecipare alla festa!")
    }

    break
}