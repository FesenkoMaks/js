 function Cat(color, name) {
        this.color = color
        this.name = name

 }
 //
 // const cat = new Cat('balck', 'Fesik')
 // console.log(cat)

 // function myNew(constructor, ...args) {
 //    const obj = {}
 //    Object.setPrototypeOf(obj, constructor.prototype)
 //     return constructor.apply(obj, args) || obj
 // }
 //
 // const cat = myNew(Cat, 'white', 'Barsik')
 // console.log(cat)

 const cat = Cat()
 console.log(cat)