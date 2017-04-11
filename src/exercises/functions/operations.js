// 1
// gegeben
// function add(a, b){
//     return a + b
// }
// 1.1
// Erstelle eine Funktion welche ein Parameter entgegen nimmt, und intern immer add mit a=20 aufruft.
// Versuche zwei Lösungs-Variante zu finden (Hint: bind).

// 2
// Die Funktion add aus Aufgabe 1 soll geändert werden. Neu möchten wir, dass immer alle Argumente geloggt werden (bevor die Berechnung gemacht wird).
// Der Aufrufer kann selbst entscheiden was für ein Logger er verwenden möchte.

'use strict'

function add(a, b){
  return a + b
}

// 1.1 Variante 1
function a(b){
  return add(20, b)
}
console.log('a: ' + a(3))

// 1.1 Variante 2
let a2 = add.bind(null, 20)
console.log('a2: ' + a2(3))

// 1.2
function add2(logger, a, b){
  logger(a, b)
  return a + b
}
let a3 = add2.bind(null, console.log, 20)
console.log('a3: ' + a3(3))
let a4 = add2.bind(null, (a, b)=>{console.log('A und B ist', a, b)}, 20)
console.log('a4: ' + a4(3))
let a5 = add2.bind(null, function(){console.log('Argumente sind', arguments)}, 20)
console.log('a5: ' + a5(3))
