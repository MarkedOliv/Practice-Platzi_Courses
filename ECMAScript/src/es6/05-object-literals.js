// Mejora a los objects literals:

function newUser (user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('oliv', 20, 'vz', 1))