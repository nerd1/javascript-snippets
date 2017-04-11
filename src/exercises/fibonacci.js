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
 Variante 3
 */
let n = 0
arr = [0,1]
for (let i = 2; i < elements; i++) {
  arr.push(arr[i-2]+arr[i-1])
}
console.log(arr)
