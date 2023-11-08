'use strict';
// CICLO FOR CONTATORE
for (let pippo = 1; pippo <= 100; pippo++) {
  // mi salvo l'elemento container padre
  const divPadre = document.getElementById('container-boxes');
  const divFiglio = document.createElement('div');

  if (pippo % 3 === 0 && pippo % 5 === 0 ) /* DIV. PER 3 E 5 */ {
    console.log('FizzBuzz');
    divFiglio.append('FizzBuzz');
    
  } else if (pippo % 3 === 0 && pippo % 5 !== 0 ) /* DIV. SOLO PER 3 */ {
    console.log('Fizz');
    divFiglio.append('Fizz');

    
  } else if (pippo % 3 !== 0 && pippo % 5 === 0) /* DIV. SOLO PER 5 */ {
    console.log('Buzz');
    divFiglio.append('Buzz');


  } else /* CASI RESTANTI */ {
    console.log(pippo);
    divFiglio.append(pippo);

  }

  divPadre.append(divFiglio);
}