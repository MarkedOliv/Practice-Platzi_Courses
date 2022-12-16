// Como se concatenaba anteriormente:
let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' + world + '!';

console.log(epicPhrase)

// Template literals para el concatenamiento de strings entre otras funcionalidades:

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2)

// Multi-line strings:

let lorem = 'Esto es un string \n' + 'esto es otra linea';

let lorem2 = `Esto es una frase epica.
con un salto de linea epico`;

console.log(lorem);
console.log(lorem2);