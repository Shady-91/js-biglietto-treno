// file javascript
// This file is part of the js-biglietto-treno project.

const priceKm = 0.21;
let km = prompt("quanti km vuoi percorrere?");
let age = prompt("quanti anni hai?");
//prezzo al km 
// quanti anni ha il passeggero

let price = km * priceKm;
// prezzo totale del biglietto

let finalPrice = price;
output.finalPrice = finalPrice.toFixed(2);
// prezzo finale del biglietto, arrotondato a due decimali

const discountUnder18 = priceKm * 0.2 * 100;
//discount for under 18
if (age < 18) {
      finalPrice = price - discountUnder18;
}

const discountOver65 = priceKm * 0.4 * 100;
//discount for over 65
if (age > 65) {
      finalPrice = price - discountOver65;
}

let message = prompt(" il prezzo del biglietto è " + finalPrice + " euro. Vuoi procedere con l'acquisto? (si/no)");
if (message === "si") {
      alert(" grazie per aver acquistato il biglietto!");
}
// messaggio di prompt per l'acquisto del biglietto
else if (message === "no") {
      alert("ok,grazie è arrivederci!");
}

// messaggio di prompt per l'annullamento dell'acquisto del biglietto