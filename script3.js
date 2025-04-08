//Named and Anonymous Functions:

// Named function
function namedFunction() {
    console.log('I am named');
}

// Anonymous function assigned to a variable
const anonymousFunction = function () {
    console.log('I am anonymous');
};

namedFunction(); // Output: I am named
anonymousFunction(); // Output: I am anonymous

// Function Hoisting

hoistedFunction(); // Output: I am hoisted

function hoistedFunction() {
    console.log('I am hoisted');
}

//.....STRINGS.....
console.log("This is STRINS concept");   //Strings are immutable
let a = "JYOTHI";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a.length);

let real_name = "HARRY"
let friend = "ROHAN"

console.log(`His name is ${real_name} and His friend nname is ${friend}`);

let b = "Shivam"
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1, 3));
console.log(b.slice(3));

console.log(b.replace("Sh", "66"));
console.log(b.concat(a));
console.log(b.concat(a, "Daddy", "Mom", "Sister"));