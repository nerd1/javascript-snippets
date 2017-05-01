// fibonacci, imperativ

// Berechne die Fibonacci Folge für n Elemente (Variabel, 0 - unendlich)
// Gib alle berechneten Elemente aus

/*
 Variante 1
 */
let elements = 3
let number = 0
let newNumber = 1
let lastNumber = 1
for (let i = 0; i < elements; i++) {
  console.log(number)
  newNumber = number + lastNumber
  lastNumber = number
  number = newNumber
}

/*
 Variante 2
 */
let arr = [0,1]
for (let i = 2; i < elements; i++) {
  arr.push(arr[i-2]+arr[i-1])
}
arr = arr.splice(0,elements)
console.log(arr)


/*
 Variante 3, rekursiv
 */
function fib(n=0, list=[]) {
  let f = list.length;
  if (n === f) {
    return list
  }
  if (f > 1){
    f = list[f-2]+list[f-1]
  }
  list.push(f)
  return fib(n, list)
}
console.log(fib(8))

//
function fib2(n=0) {
  return n < 2 ? n : fib2(n - 1) + fib2(n - 2)
}
console.log(fib2(8))

//
function fibonacci(n, undefined){
  if (fibonacci.cache[n] === undefined) {
    fibonacci.cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
  }
  return fibonacci.cache[n]
}
fibonacci.cache = [0,1,1]
fibonacci(10)
console.log(fibonacci.cache)
