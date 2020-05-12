class Iterator {
  constructor(items) {
    this.index = 0
    this.items = items
  }

  first() {
    return this.items[0]
  }

  last() {
    return this.items[this.items.length - 1]
  }

  next() {
    return this.items[++this.index]
  }

  hasNext() {
    return this.index <= this.items.length
  }

  reset() {
    this.index = 0
  }

  each(cb) {
    for(let current = this.first(); this.hasNext(); current = this.next()) {
      cb(current)
    }
  }

  previous() {
    return this.items[--this.index]
  }
}

const INITIAL = [1,2,3,4,5,6,7,8,9]
const iterator = new Iterator(INITIAL)
console.log(iterator)
iterator.each(console.log)
console.log(iterator.reset())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.hasNext())
console.log(iterator.previous())
