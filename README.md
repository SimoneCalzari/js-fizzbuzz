# JS-FIZZBUZZ

## DESCRIZIONE PROBLEMA
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

### BONUS 1
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

### BONUS 2
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## HUMAN CODE

## RISOLUZIONE ESERCIZIO BASE
I passaggi per la risoluzione del problema sono:

1. Apriamo un ciclo for dove inizializziamo una variabile partendo da uno, poniamo come suo valore massimo 100 (compreso) e incrementiamo di uno ad ogni iterazione.

2. Dentro il ciclo definiamo le seguenti condizioni:
   - Se la variabile è divisibile sia per 3 che per 5 mostriamo in console FizzBuzz
   - Altrimenti se la variabile è divisibile per 3 ma non per 5 mostriamo in console Fizz
   - Altrimenti se la variabile è divisibile per 5 ma non per te mostriamo in console Buzz
   - Altrimenti nei casi restanti mostriamo in console il valore della variabile