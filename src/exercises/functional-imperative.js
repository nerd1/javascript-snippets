'use strict'
// functional vs imperative

// 1
// Schreibe eine Funktion die alle Zahlen in eines Arrays summiert.
// z.B. sum([1,2,3]) => 6
// Schreibe eine funktionale und eine imperative Variante.

function sum_imp(n){
    let r = 0
    for (let i = 0; i < n.length; i++){
        r+=n[i]
    }
    return r
}
console.log(sum_imp([1,2,3]))

function sum_func(n){
    let r = 0
    n.forEach(e => r+=e)
    return r
}
console.log(sum_func([1,2,3]))

// 2
// Schreibe eine Funktion die einen Array von Zahlen entgegen nimmt und einen Array mit Booleans zurückgibt.
// Die Funktion ermittelt für jede Zahl ob diese Gerade ist oder nicht.
// z.B. even([1,2,3]) => [false, true, false]
// Schreibe eine funktionale und imperative Variante.

function even_imp(n){
    let r = [];
    for (let i = 0; i < n.length; i++){
        r.push(n[i] % 2 === 0 ? true : false)
    }
    return r
}
console.log(even_imp([1,2,3]))

function even_func(n){
    return n.map(e => e % 2 === 0 ? true : false)
}
console.log(even_func([1,2,3]))

