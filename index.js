class Animal {
    constructor(name, sound) {
        if (this.constructor === Animal) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} makes a sound: ${this.sound}`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "Bark");
    }

    fetch() {
        console.log(`${this.name} is fetching!`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, "Meow");
    }

    scratch() {
        console.log(`${this.name} is scratching!`);
    }
}

const dog1 = new Dog("Buddy");
const cat1 = new Cat("Whiskers");
const dog2 = new Dog("Max");

dog1.makeSound(); 
cat1.makeSound(); 
dog2.makeSound(); 

dog1.fetch(); 
cat1.scratch(); 
