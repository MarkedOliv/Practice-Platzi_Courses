// rest y spread ahora puede ser usados con obj

const user = { username: 'oliv', age: 20, country: 'VZ'}

const { username, ...values } = user;

console.log(username)
console.log(values)