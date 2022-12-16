// Las clases estan basadas en prototipos de js y son utilizadas para mejorar la herencia

// Declarando:
class User {
    // Se utiliza para inicializar elementos de la clase
    // This hace referencia al elemento padre que contiene
    constructor(name, age) {
        this.name = name;        
        this.age = age;        
    }

    // metodos
    speak() {
        return `Hello I am ${this.name} and I'm ${this.age}`;
    }

    // Setters & Getters:
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
};
// Instancia
const newUser = new User('Oliver', 20);

console.log(newUser.speak());
console.log(newUser.uAge);
console.log(newUser.uAge = 25);
console.log(newUser.speak());