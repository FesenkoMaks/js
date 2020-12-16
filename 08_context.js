//
const person = {
    surname: 'Stark',
    knows: function (what, name) {
        console.log(`You ${what} knows, ${name} ${this.surname}`)
    }
}

person.knows('all', 'Max')

const kate = {
    surname: 'Snow'
}
//
// person.knows.bind(kate, 'nothing', 'Kate')()
// person.knows.call(kate, 'nothing', 'Kate')
// person.knows.apply(kate, ['nothing', 'Kate'])
// person.knows.apply({surname: 'Bich'}, ['nothing', 'Kate'])

// --------------------------

function Person(name, age) {
    this.name = name
    this.age = age

    console.log(this)
}

const Elena = new Person('Elena', 20)

// // ------------
// function logThis() {
//     console.log(this)
// }
//
// const obj = {num: 42}
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()
//
// // ------------
//
// const animal = {
//     legs: 4,
//     logThis: function () {
//         console.log(this)
//     }
// }
//
// animal.logThis()

// -----------------------------

function Cat(color) {
    this.color = color
    console.log('This', this);
    this.logThis = () => {
        console.log('Arrow this', this)}
}

new Cat('red')