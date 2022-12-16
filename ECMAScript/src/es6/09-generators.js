// Los generadores son un tipo especial de funcion que va a retornar una serie de valores segun el algoritmo definido.

function* iterate (arr) {
    for (let value of arr) {
        yield value;
    }
}

const it = iterate(['oliver', 'fernando', 'gabriel']); 

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)