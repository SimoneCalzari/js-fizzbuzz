'use strict';

const divPadre = document.getElementById('container-boxes'); // PRENDO DIV PADRE E LO SALVO IN UNA COSTANTE

// CICLO FOR CONTATORE
for (let pippo = 1; pippo <= 100; pippo++) {

  const divFiglio = document.createElement('div');  // CREO DIV FIGLI E SALVO IN COSTANTE
  const divFiglioContenuto = document.createElement('div'); // CREO DIV CONTENUTO DEI FIGLI E SALVO IN COSTANTE

  if (pippo % 3 === 0 && pippo % 5 === 0) /* DIV. PER 3 E 5 */ {
    console.log('FizzBuzz'); // SU CONSOLE 
    divFiglioContenuto.append('FizzBuzz'); // INSERISCO TESTO DENTRO DIV CONTENUTO
    divFiglio.classList.add('fizz-buzz'); // AGGIUNGO CLASSE AL DIV FIGLIO PER CAMBIARE STILE
    
  } else if (pippo % 3 === 0) /* DIV. SOLO PER 3 */ {
    console.log('Fizz'); // SU CONSOLE
    divFiglioContenuto.append('Fizz'); // INSERISCO TESTO DENTRO DIV CONTENUTO
    divFiglio.classList.add('fizz'); // AGGIUNGO CLASSE AL DIV FIGLIO PER CAMBIARE STILE
    
  } else if (pippo % 5 === 0) /* DIV. SOLO PER 5 */ {
    console.log('Buzz'); // SU CONSOLE
    divFiglioContenuto.append('Buzz'); // INSERISCO TESTO DENTRO DIV CONTENUTO
    divFiglio.classList.add('buzz'); // AGGIUNGO CLASSE AL DIV FIGLIO PER CAMBIARE STILE

  } else /* CASI RESTANTI */ {
    console.log(pippo); // SU CONSOLE
    divFiglioContenuto.append(pippo); // INSERISCO TESTO DENTRO DIV CONTENUTO
    divFiglio.classList.add('normal'); // AGGIUNGO CLASSE AL DIV FIGLIO PER CAMBIARE STILE

  }

  divFiglio.append(divFiglioContenuto); // METTO CONTENUTO DENTRO FIGLIO
  divPadre.append(divFiglio); // METTO FIGLIO DENTRO PADRE
}