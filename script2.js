// Arrow Functions...

const square = (x) => x * x
let value = square(5);
console.log("The square value is " + value);

// Return statement Function...

function sayHello() {
    return 'Hello..!!';
}
let greeting = sayHello();
console.log(greeting);

// Function Scope...

function outerFunction() {
    let message = 'I am inside the Function';
    console.log(message);
}
message = 'Hello world!'; //If we doesn't decalare the message in the outer then it will generate Error
outerFunction();
console.log(message);

// Closure Functions...

function outer() {
    let message = 'Hello I am Jyothiswar';

    function inner() {
        console.log(message);
    }

    return inner;
}

let closure = outer();
closure();

// Function Callbacks...

function fetchData(callback) {
    // Simulate an asynchronous operation
    setTimeout(function () {
        let data = 'This is the data';
        callback(data);
    }, 2000);
}
function displayData(data) {
    console.log(data);
}

fetchData(displayData)
