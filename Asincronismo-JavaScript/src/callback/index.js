// Callback para realizar calculos:
function add (a, b) {
    return a + b;
}

function calc(a, b, cb) {
    return cb(a, b);
}

// console.log(calc(10, 20, add))

// Callback con setTimeout:

function greeting (name) {
    console.log(`Hello ${name}!`)
}
setTimeout(greeting, 2000, 'Oliver')
