'use strict'

function toArray(xs){
    return Array.prototype.slice.call(xs)
}

Function.prototype.curry = function() {
    let f = this
    if (arguments.length < 1){
        return f
    }
    let a = toArray(arguments)
    return function() {
        let b = toArray(arguments)
        return f.apply(this, a.concat(b))
    }
}

let sum = (a, b) => a + b
console.log(sum(1,2))

let addOne = sum.curry(1)
console.log(addOne(2))

// ES5 mit bind:
let addOneBind = sum.bind(this, 1)
console.log(addOneBind(2))

