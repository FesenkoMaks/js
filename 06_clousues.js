function sayHello(name) {
    let message = 'Hello ' + name
    return function () {
        console.log(message)
    }
}

const helloToElena = sayHello("Elena")
helloToElena()

function frameworkManager() {
    const fw = ['Angular', 'React']
    return {
        print: function () {
            console.log(fw)
        },
        add: function (framework) {
            fw.push(framework)
        }
    }
}

// const manager = frameworkManager()
// console.log(manager)
// manager.print()
// manager.add('Vue')
// manager.print()

//  setTimeout

const fib = [ 1, 2, 3, 4, 5, 6]
for (let i = 0; i < fib.length; i++){
    (function (j) {
        setTimeout(function () {
            console.log(fib[j])
        }, 1500)
    })(i)
}