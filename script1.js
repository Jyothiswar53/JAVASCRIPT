console.log("Hello World");
var name = "Jyothiswar";
let age = 20;
console.log(name);
console.log(age);
console.log(name + " age is " + age);
console.log(name + " is of datatype : " + typeof (name));
console.log(age + " is of datatype : " + typeof (age));


//VARIABLES AND DATA TYPES

// let age = 30;
age = 40;           //We can change the values in VARIABLE concept
console.log(age);

//------------------------------------------------------------------------------------------ //

let namee = "JYOTHISWAR";
let agee = "20";                         // They are accessible only within the block
console.log("Name is " + namee, "age is " + agee);

// ----------------------------------------------------------------------------------------- //

const pi = 3.14159;         //constant values which we cannot change

// ----------------------------------------------------------------------------------------- //

// Function Declaration...

function greet(name, age) {
  console.log(`Hello, ${name}! Your age is ${age}`);
}
greet('Jyothiswar', 20);

//Function Parameters...

function add(a, b, c) {
  return a + b + c;
}
let result = add(2, 3, 5);
console.log("The sum of the numbers is " + result);

// Function Expression...

let multiply = function (a, b) {
  return a * b;
}
let result1 = multiply(5, 4);
console.log("The multiplication of the given numbers is " + result1);

