/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10
let num2 = 20
if (num1 > num2) {
  console.log("num 1 e' maggiore di num2: ")
} else {
  console.log("num2 e' maggiore di num1: ")
}




/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (num2 !== 5){
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 10;
let risultato = (num3 % 5);
if (risultato > 0){
  console.log("non e' divisibile per 5");
}
else {
  console.log(" e' divisibile 5")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
if (num1 !== num2 && num2 !== num1 && num1 - num2 !== 8 && num2 !== num1) {
  console.log("Il risultato e' verificato in ogni circostanza")
} else {
  console.log("Il risultato non e' verificato in ogni circostanza")
}
/* SCRIVI QUI LA TUA RISPOSTA */

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
const discount = 0.8;
const discountOnitemProduct = 40 * 0.8;
const itemProductDiscounted =  discountOnitemProduct;
const itemDiscount = itemProduct  
const shippingCosts = itemProduct >= 50 ? 0 : 25;
console.log("I prodotti sono scontati del 20% e itemProduct costa: ", itemProductDiscounted + "$" + ", la spedizione e' gratis se almeno un item  costa 50$ senno:", shippingCosts > 0 ? "e' di: " + shippingCosts + "$" : "gratis" ,"totale della spesa: ",  shippingCosts + itemProductDiscounted + "$");
console.log(itemProductDiscounted + "$");
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let marco = 2;
let sara = 5; 
let mario = 10;
const amici = (marco ,sara ,mario);
console.log(amici);
console.log(marco, sara, mario);
if (mario >= sara && mario >= marco) {
  console.log(mario, sara, marco)
} else if (mario <= sara && mario <= marco){
  console.log(marco, sara, mario)
}

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
if (disparo > 0 || disparo === 0){
  console.log("il numero e': ", disparo > 0 ? "disparo quindi:" + "true" :  "pari quindi: " + "false" );
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
let val = 8
if (val < 5) {
  if (val % 2 !== 0) {
    console.log("minore di 5 ed e' anche dispari")
  } else {
    console.log("e' minore di 5 ed e' pari")
  }
} else if (val < 10) {
  if (val % 2 !== 0) {
    console.log(" minore di 10 ed e' dispari")
  } else { 
    console.log("e' minore di 10 ed e' pari")
  }
} else {
  if (val >= 10 && val % 2 === 0) {
    console.log("e' maggiore o uguale a 10 ed e' pari")
  } else { 
    console.log("e' maggiore o guale a 10 ma dispari")
  }
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/



/* SCRIVI QUI LA TUA RISPOSTA */
me = [];
me.city = "Toronto";


console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.lastName = "Casapao"
console.log(me)
delete me.lastName;
console.log(me)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills = ["Determinated", "Costant"]
console.log(me);
 delete me.skills[1]
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [];
numeri.push(1,2,3,4,5,6,7,8,9,10)
console.log(numeri)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri.splice (9, 9, 100) 

console.log(numeri)