// Las promesas son una de las maneras de trabajar el asincronismo en js: 

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('Hey!');
        } else {
            reject('Whops!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error))