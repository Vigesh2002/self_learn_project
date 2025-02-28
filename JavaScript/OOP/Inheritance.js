// ES5 version

function Animal(name) {
    this.name = name;
}

// Method shared among all Animal instances
Animal.prototype.makeSound = function() {
    return "Unknown sound";
}

// subclass constructor inherits from Animal

function Dog(name) {
    Animal.call(this, name);
}

// Setup prototype chain from Dog to inherits from Animal

Dog.prototype = Object.create(Animal.prototype);

// Method specific to Dog 
Dog.prototype.makeSound = function() {
    return "Woff!";
}

// Create an instance of classes
const genericAnimal = new Animal('Generic Animal');
const dog = new Dog('Buddy');
console.log(dog.name); // Buddy
console.log(dog.makeSound()); // Woff!

// ES6 version

class Animals {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return "Unknown sound";
    }
}

// subclass inherits from Animal
class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        return "Meow!";
    }
}

const genericAnimals = new Animal('Generic Animal');
const cat = new Cat('Kitty');
console.log(cat.name);
console.log(cat.makeSound()); 

// Inheritance is an Object-Oriented Programming (OOP) concept where a child class (subclass) inherits properties and methods from a parent class (superclass). It helps in code reusability and hierarchical relationships between objects.

// In the given example, the Animal class defines a makeSound method, and the Dog and Cat classes extend the Animal class. The Dog class overrides the makeSound method to return "Woff!", while the Cat class overrides it to return "Meow!". This demonstrates polymorphism, where objects of different classes can be treated as instances of a common superclass.

// Key Points of Inheritance

// Code Reusability → Child classes reuse methods of the parent class.
// Extensibility → New features can be added to child classes without modifying the parent class.
// Hierarchy Structure → Represents real-world relationships (e.g., Vehicle → Car, Bike).
// Uses extends Keyword → In ES6+, class and extends are used for inheritance.