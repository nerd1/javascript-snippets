// 1.1 Schreibe eine Funktion die einen Namen entgegen nimmt und "Hallo <name>" zurück gibt.

// 1.2 Verändere die Funktion so, dass wenn keine Name angegeben wird, als Default "Welt" genommen wird.

// 1.3 Verändere die Funktion so, dass man soviele Namen man will mitgeben kann. Die Ausgabe ist dann "Hallo <name1>, <name2>, ..."
//     Als Default soll immer noch Welt gelten.
//     Versuche zwei Lösungsvarianten zu finden (Hint: Rest-Parameter)

'use strict'

function hallo(name){
  return `Hallo ${name}`
}
console.log(hallo('hans'))


function hallo2(name='Welt'){
  return `Hallo ${name}`
}
console.log(hallo2())
console.log(hallo2('hans'))


function hallo3(name=['Welt']){
  return `Hallo ${name.join(', ')}`
}
console.log(hallo3(['hans','john']))
console.log(hallo3())


function hallo4(...name){
  return `Hallo ${(name.length === 0 && 'Welt') || name.join(', ')}`
}
console.log(hallo4('hans','john'))
console.log(hallo4())
gi