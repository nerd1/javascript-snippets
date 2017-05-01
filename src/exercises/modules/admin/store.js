'use strict'

export default class {
    constructor(items){
        this.items = items || []
    }

    add(items){
        this.items.push(items)
    }

    remove(item){
        let i = this.items.indexOf(item)
        this.items.splice(i, 1)
    }

    findAll(matcher){
        return this.items.filter(matcher)
    }

}
