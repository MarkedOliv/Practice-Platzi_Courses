function* gen () {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)

function* iterable (arr) {
    for (let el of arr) {
        yield el
    }
}

const it = iterable(['oliver', 'fernando', 'gabriel', 'jesus', 'john'])

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)