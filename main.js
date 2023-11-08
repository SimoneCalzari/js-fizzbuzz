'use strict';

for (let pippo = 1; pippo <= 100; pippo++) {

  if (pippo % 3 === 0 && pippo % 5 === 0 ) {
    console.log('FizzBuzz');
    
  } else if (pippo % 3 === 0 && pippo % 5 !== 0 ) {
    console.log('Fizz');
    
  } else if (pippo % 3 !== 0 && pippo % 5 === 0) {
    console.log('Buzz');

  } else {
    console.log(pippo);

  }
}