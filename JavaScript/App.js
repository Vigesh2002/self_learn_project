let firstName = "Vigesh"
let lastName = "Viki"

let fullName = firstName.concat(lastName);

console.log(fullName)

function outerFunction() {
    let hello = "Hello World";
    function innerFunction() {
        console.log(hello);
    };
    innerFunction();
};

outerFunction();

