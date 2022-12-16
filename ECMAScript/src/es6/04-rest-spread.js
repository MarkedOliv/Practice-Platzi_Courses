// Array destructuring:

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

// Object Destructuring:
let user = { username: 'Oliver', age: 20 }
let { username, age } = user;
console.log(username, age)

// Spread Operator/operador de propagacion:

let person = { name: 'Oliver', age: 28 };
let country = 'VZ';
let data = { ...person, country};

console.log(data)

// Parametros rest:

function sum (num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);