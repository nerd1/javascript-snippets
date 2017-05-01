'use strict'

import {Person, Store} from './admin/admin.modules'

let p1 = new Person('Mayer','John')

let store = new Store([])

store.add(p1)

store.add(new Person('Lee','Bruce'))
store.add({name: 'hello', vorname: 'world'})

//store.remove(p1)

console.log(store.findAll((p) => p.name.startsWith('')))

