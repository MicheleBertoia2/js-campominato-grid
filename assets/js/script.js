// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

/*
Steps
1. prendo gli elementi necessari
2. creo la funzione per generare i blocchi
*/

//1.
//---------------elements--------

const startGame = document.querySelector('.start-game');
const griglia   = document.querySelector('.grid');


//2.
//--------------functions-----------

function generatoreQuadri(numInterno) {
   const newSquare = document.createElement('div');
   newSquare.classList.add('square');
   newSquare.assignedNum = numInterno;
   newSquare.addEventListener('click', function () {
    this.classList.toggle('clicked');
    console.log(this.assignedNum);
   })
   return newSquare;
}

griglia.append(generatoreQuadri(2));