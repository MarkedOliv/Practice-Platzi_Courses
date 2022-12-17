try {
    hello();
} catch (error) {
    console.log(error)
}

//Ahora es opcional el error

try {
    anotherFn();
} catch {
    console.log("errorsito")
}