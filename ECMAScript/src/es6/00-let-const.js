// Declarar e inicializar: 

// Var funciona de manera global
var lastName = 'David';
// Reasignar
lastName = 'Oliver';
console.log('lastName: ', lastName)

// Let funciona de acuerdo al contexto en donde se define

let fruit = 'Apple';
fruit = 'Kiwi';
console.log('fruit: ', fruit)

// Const como su nombre indica es una constante debido a esto su valor no puede ser reasignado

const animal = 'Dog';
// animal = 'Cat'; TypeError
console.log('animal: ', animal)

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple';
        // let fruit2 = 'Banana'; Block Scope
        // const fruit3 = 'Kiwi'; Block Scope
    }
    console.log(fruit1);
    // console.log(fruit2);
    // console.log(fruit3); Block Scope
}

fruits();