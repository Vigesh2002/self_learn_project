function Counter() {
    let count = 0; // private variable

    // public methods that can access and modify the private variable

    this.increment = function() {
        count++;
    };

    this.decrement = function() {
        count--;
    };
    
    this.getCount = function() {
        return count;
    };
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // 2
console.log(counter.count); // undefined


// Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP). It refers to the practice of hiding the internal details of an object and only exposing necessary functionalities. This helps in data security, modularity, and code maintainability.

// In the given example, the Counter class has private variables count and public methods increment, decrement, and getCount. The increment and decrement methods modify the count variable, while the getCount method returns the current value of the count variable. The count variable is not directly accessible from outside the class, ensuring data security and encapsulation.

// Key Points of Encapsulation

// Data Hiding: Prevents direct access to object properties.
// Controlled Access: Allows modification through getter and setter methods.
// Improves Maintainability: Reduces dependencies on internal implementation.
// Prevents Unwanted Modification: Protects object integrity.

