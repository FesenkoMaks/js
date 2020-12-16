// null, undefined, boolean, number, string, object, symbol, bigInt

console.log(typeof 0)
console.log(typeof true)
console.log(typeof 'js')
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof {id:1})
console.log(typeof Symbol('JS'))
console.log(typeof Math)
console.log(typeof NaN)

// Приведение типов

let language = 'JavaScript'
if (language){
    console.log('The best language is: ', language)
}

// falsy

//'', 0, null, undefined, NaN, false

console.log(Boolean({ada:1}))
console.log(Boolean(''))
console.log(Boolean(' '))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(false))

// Строки и числа

console.log(1 + '2')
console.log('1' + 2)
console.log('1' + 3 + 5)
console.log(1 + '1' + 3)
console.log('' + 2 + 3)  // string
console.log('' + 5 - 1 + 11)
console.log('2' * '4') // number
console.log(1 + 4 + 'px')
console.log('px' + 4 + 11) //string
console.log('42' - 40) //number
console.log('42px' - 40) //NaN
console.log(null + 3) //number
console.log(undefined + 3) //NaN

// == vs ===

// == с приведением типов
// === по значению без приведением типов

console.log(2 == '2')
console.log(2 === '2')
console.log(null == undefined)
console.log(null === undefined)

// -------------------------------

console.log(false == '')
console.log(false == [])
console.log(false == {})
console.log('' == {})
console.log('' == [])
console.log(0 == [])
console.log(0 == {})
console.log(0 == null)
