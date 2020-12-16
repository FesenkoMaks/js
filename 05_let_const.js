//Let

// let a = 'Variable a'
// let b = 'Variable b'
//
// {
//     a = 'New Variable A'
//     let b = 'Local Variable B'
//     console.log(a)
//     console.log(b)
//     let c = 'Yes'
// }
//
// console.log(a)
// console.log(b)

// Const

const PORT = 8080
// PORT = 1111

const arr = [1, 2, 3]
arr[1] = 'New'
arr.push('Bye')
console.log(arr)

const obj = {
    a: 11,
    b: 22,
    c: 33,
    d: 44
}

obj.a = 'Hello'
obj.e = 77
delete obj.b
console.log(obj)