console.log(sum(11,2))

function sum(a, b) {
    return a+b
}

console.log(sum(2,5))


console.log(i)  //undefined
var i = 44
console.log(i)

// console.log(num)
// console.log(numA)
// const num = 44
// let nuA = 22


// Function Expression, Function Declaration

console.log(square(2))
// Function Declaration - есть хостинг
function square(num) {
    return num ** 2
}

console.log(squareA(3))
// Function Expression - нет хостинга
let squareA = function (num) {
    return num ** 2
}