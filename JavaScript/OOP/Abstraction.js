class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        throw new Error('The method (makeSound) must be implemented');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    // Implement the abstract method
    makeSound() {
        return 'Woff!';
    }
}

// Constructor class
class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        return 'Meow';
    }
}

const dog = new Dog('Rex');
console.log(dog.name); // Rex
console.log(dog.makeSound()); // Woff!

const cat = new Cat('Fluffy');
console.log(cat.name); // Fluffy
console.log(cat.makeSound()); // Meow

// Abstraction is an Object-Oriented Programming (OOP) concept that focuses on hiding complex implementation details and exposing only the necessary functionalities to the user. It helps in reducing code complexity and increasing maintainability.

// In the given example, the Animal class defines an abstract method makeSound that must be implemented by its subclasses. The Dog and Cat classes extend the Animal class and provide their own implementations of the makeSound method. This enforces the subclasses to provide their own implementation of the abstract method, ensuring that the necessary functionalities are implemented.

// Key Points of Abstraction

// Hides Implementation Details → Users interact with an object without knowing how it works internally.
// Simplifies Code Usage → Provides a clear and simple interface.
// Enhances Maintainability → Changes in internal logic do not affect external code.
// Encapsulation vs Abstraction → Encapsulation is about hiding data, while abstraction is about hiding implementation details.