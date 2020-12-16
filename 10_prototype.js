 // __proto__

 // Object.getPrototypeOf()

 function Cat(name, color) {
    this.name = name
     this.color = color
 }

 Cat.prototype.voice = function () {
     console.log(`Cat ${this.name} says myay`)
 }

 // const cat = new Cat('KIT', 'red')
 // console.log(cat)
 // cat.voice()
 // console.log(Cat.prototype)
 // console.log(cat.__proto__)
 // console.log(cat.__proto__ === Cat.prototype)
 // console.log(cat.constructor)

 // -----------------------------

 function Person() {}
 Person.prototype.legs = 2
 Person.prototype.skin = 'white'

 const person = new Person()
 person.name = 'Max'

 // console.log('skin' in person)
 // console.log('legs' in person)
 // console.log(person.legs)
 // console.log(person.name)
 //
 // console.log(person.hasOwnProperty('name'))
 // console.log(person.hasOwnProperty('skin'))

 // --------------------------------------- Object.create()

 const proto = {year: 2020}
 const myYear = Object.create(proto)

 proto.year = 4444

 console.log(myYear.year)
 console.log(myYear.hasOwnProperty('year'))
 console.log(myYear.__proto__ === proto)