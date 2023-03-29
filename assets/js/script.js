// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

/*
Steps
1. prendo gli elementi necessari
2. creo la funzione per generare i blocchi
3. ciclo la generazione di blocchi
4. lego la generazione al click del bottone "gioca"
5. aggiungo un bottone di reset

BONUS
6.creo la select in html e la aggiungo agli elementi
7.imposto uno switch nel bottone per far cambiare i parametri di gioco
*/

//1.
//---------------elements--------

const reset           = document.querySelector('.reset');
const startGame       = document.querySelector('.start-game');
const campoGriglia    = document.querySelector('.grid-camp');
//6.
// const inputDifficoltà = document.querySelector('.difficulty');
// let difficoltà      = inputDifficoltà.value;
let numeroCelle       = 100


//-----------------------------------


let grigliaEsiste = false;
//4.
startGame.addEventListener('click', function(){
  TODO://sistemare scelta difficoltà
  // if (difficoltà === 'easy') {
  //   numeroCelle = 100;
  // }else if (difficoltà === 'medium'){
  //   numeroCelle = 81;
  // }else if (difficoltà === 'hard'){
  //   numeroCelle = 49;
  // }

  if(grigliaEsiste === false){
    griglia = document.createElement('div')
    griglia.classList.add('grid')
    campoGriglia.appendChild(griglia);
    grigliaEsiste = true;
    console.log(grigliaEsiste);

    //3.  
    for (let i = 1; i < numeroCelle + 1; i++) {
      const squareReady = generatoreQuadri(i);
      griglia.append(squareReady);
      
    }

    // 5.
    reset.addEventListener('click', function () {
      griglia.remove()
      // difficoltà = 'nd';  
    })
  }else{
    alert('Hai già una partita in corso')
  }
})



//2.
//--------------functions-----------

/**
 * Genera un blocco già cliccabile con assegnato come proprietà custom il numero passato
 * @param {number} numInterno 
 * @returns quadrato griglia cliccabile e numerato internamente
 */
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
