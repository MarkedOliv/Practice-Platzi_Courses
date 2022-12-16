// Default params como su nombre lo indica son parametros por defecto que se pueden definir el las funciones.
// Anteriormente:

function newUser (name, age, country) {
    var name = name || 'Oliver';
    var age = age || 20;
    var country = country || 'Venezuela';
    console.log(name, age, country)
}

newUser();
newUser('David', 28, 'Colombia');

// Desde es6:
function newAdmin (name = 'Oliver', age = 20, country = 'Venezuela') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('David', 28, 'Colombia');