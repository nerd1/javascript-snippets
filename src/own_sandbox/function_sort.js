'use strict'

let sort_by = function(field, primer){
    let key = function(x){return(primer ? primer(x[field]) : x[field])}
    return function(y,z){
        let A = key(y)
        let B = key(z)
        return((A < B) ? -1 : ((A > B) ? 1 : 0))
    }
}

let list = [{
    "name": "Muster",
    "vorname": "Hans",
    "alter": "9"
}, {
    "name": "Abc",
    "vorname": "John",
    "alter": "22"
}, {
    "name": "Kent",
    "vorname": "Clark",
    "alter": "34"
}
]

console.log(list.sort(sort_by("name")))

console.log(list.sort(sort_by("alter", x => parseInt(x, 10))))


