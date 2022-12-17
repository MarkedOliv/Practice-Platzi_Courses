class User {
    constructor(name, age) {
        this.name = name;        
        this.age = age;        
    }

    #speak() {
        return `Hello I am ${this.name} and I'm ${this.age}`;
    }
    get #uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
};
const newUser = new User('Oliver', 20);

console.log(newUser.speak());