// file javascript
// This file is part of the js-biglietto-treno project.

const priceKm = 0.21;
let km = prompt("quanti km vuoi percorrere?");
let age = prompt("quanti anni hai?");
//prezzo al km e l'eta del passeggero
const discountUnder18 = priceKm * 0.2 * 100;
//discount for under 18
const discountOver65 = priceKm * 0.4 * 100;
//discount for over 65