class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return "Unknown sound";
    }
}

class Dog extends
Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        return "Woff!";
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        return "Meow!";
    }
}

function animalInfo(animal) {
    console.log(`Name: ${animal.name}`);
    console.log(`Sound: ${animal.makeSound()}`);
}

const genericAnimal = new Animal('Generic Animal');
animalInfo(genericAnimal);

const dog = new Dog('Buddy');
animalInfo(dog);

const cat = new Cat('Whiskers');
animalInfo(cat);

// Polymorphism is an Object-Oriented Programming (OOP) concept that allows different classes to use the same method name but implement it differently.

// It enables code flexibility and reusability, making it possible to call the same method on different objects and get different behaviors based on the object type.

// In the given example, the Animal class defines a makeSound method that returns "Unknown sound" by default. The Dog and Cat classes extend the Animal class and provide their own implementations of the makeSound method. When the animalInfo function is called with different instances of Animal, it demonstrates polymorphism by invoking the makeSound method specific to each object type.

// Key Points of Polymorphism

// Method Overriding → A child class provides its own implementation of a method inherited from the parent class.
// Method Overloading (Not natively supported in JavaScript) → Multiple methods with the same name but different parameters (can be simulated).
// Code Flexibility & Reusability → The same function name works for different object types.
// Encapsulation & Abstraction → Works with other OOP principles to structure code efficiently.