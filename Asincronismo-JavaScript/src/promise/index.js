// Promise

const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('Resolve')
    } else {
        reject('Reject')
    }
});

const cows = 9;

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject('There are not enought cows on the farm')
    }
})

countCows.then(result => console.log(result)).catch(error => console.error(error)).finally(() => console.log('Finally'))