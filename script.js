const assert = require("assert");


const dog  = {
    name: 'Adam',
    bark: function() {
        return 'Woof! I am ' + this.name
    }
    
}

console.log(dog.name)
assert.strictEqual(dog.name,'Adam')
console.log(dog.bark())
assert.strictEqual(dog.bark(),'Woof! I am Adam')

const person = {
    firstName: 'John',
    lastName: 'Smith',
    name: function() {
        return this.firstName + " " + this.lastName
    },

    birthYear: 1991,
    ageThisYear: function() {
        return 2020 - this.birthYear
    }
}

assert.strictEqual(person.name(),'John Smith')
console.log(person.name())
assert.strictEqual(person.ageThisYear(),29)
console.log(person.ageThisYear())

let someString = 'abc'

assert.strictEqual(someString.length,3)

console.log(someString.length)

someString = 200

console.log(someString.length)

