/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 21;
const myOwnCalculation = num1 >= 20 ? "Se compare questa scritta significa che num1 e' maggiore di 20" : num1 >= 10 ? "Se compare questa scritta significa che num1 e' inferiore a 20" :  "Se compare questa scritta sigifica che num1 e' inferiore di 10";

console.log(myOwnCalculation);


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num2 = 6
if (num2 !== 5){
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 10;
let risultato = (num3 % 5);
if (num3 > 0){
  console.log("divisibile per 5");
}
else {
  console.log("non e' divisibile per 5")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num4 = 2;
console.log(num3 - num4);
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cartTotal = 25;
const totalShoppingCart = cartTotal > 50 ? 0 : 10;
console.log("Il carrello e di: ", cartTotal + "$" + ", il costo di spedizione e:", totalShoppingCart > 0 ? totalShoppingCart : "gratis");
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const itemProduct = 40;
const discount = 20;
const discountOnitemProduct = 50 % 20;
const itemProductDiscounted = itemProduct - discountOnitemProduct;
const itemDiscount = itemProduct  
const shippingCosts = itemProduct >= 50 ? 0 : 25;
console.log("I prodotti sono scontati del 20% e itemProduct costa: ", itemProductDiscounted + "$" + ", la spedizione e' gratis se almeno un item  costa 50$ senno:", shippingCosts > 0 ? shippingCosts : "gratis", "totale della spesa: ", shippingCosts + itemProductDiscounted + "$");
console.log(itemProductDiscounted);
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let marco = 1;
let sara = 2; 
let mario = 3;
const amici = [marco, sara, mario];
const ordinato = [mario, sara, marco]
console.log(amici);
console.log(ordinato);
if (mario > sara && mario > marco){
  console.log(ordinato);
};

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let lucio = 1;
console.log(typeof lucio);
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let disparo = (marco % 2)
if (marco > 0){
  console.log("il numero e': ", disparo > 0 ? "disparo quindi:" + "true" : "pari quindi: " + "false" );
} 

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 0
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 10");
    } else if(val = 0){
      console.log("Meno di 10");
    }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  Location: {city: "Toronto"}
}

/* SCRIVI QUI LA TUA RISPOSTA */
const Location = {city: "Toronto"};
console.log(me.Location.city);
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2];
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [1,2,3,4,5,6,7,8,9,10];
console.log(numeri)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri.splice (9, 9, 100) 
console.log(numeri)