let a = 33
let b = a
b++
console.log('a: ', a)
console.log('b: ', b)

//-------------------

let c = [1, 2, 3]
let d = [...c]
let e = c.concat()

d.push(4)
e.push(55)

console.log(c)
console.log(d)
console.log(e)

//-------------------