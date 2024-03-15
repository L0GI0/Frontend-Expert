const arr = [1, 2, 3, 4];

const doubled = arr.map(double);

function double(num) {
    return num * 2;
}

console.log(doubled);

/* Arrow function */

const doubledWithArrowFunction = arr.map(num => num * 2);

const [first, second, ...rest] = arr;

console.log(first, second);

console.log(rest);

const person = {
    name: 'Conner',
    website: 'FrontendExpert',
    company: 'Foo'
};


/* renaming destructured name */
const { name: firstName, company='AlgoExpert', ...personRest } = person;
console.log(firstName);
console.log(personRest);
console.log(company) /* Fill print foo, it person would miss company property then AlgoExpert 
would be printed */

function printName({ name }) {
    console.log(name);
}

printName(person);

/* Spread operator - allows to take an array and separate out the values and 
pass them in as separate entities */

function add(x, y) {
    console.log(x + y);
}

add(arr[0], arr[1]);
add(...arr)
const arr2 = [5, 6, 7];
const combined = [0, ...arr, 4.5, ...arr2] /* Creates a new array with values 0, 1, 2, 3, 4, 4.5, 5, 6, 7 */

function logParams(x, ...rest) {
    console.log(x);
    console.log(rest);
}

logParams(1); // 1

logParams(1, 2) // 1 [2]

logParams(1, 2, 3, 4) // 1 [2, 3, 4]

const name = 'Conner';

console.log('Hello ' + name);

/* Template literals */

console.log(`Hello ${name} ${1 + 3}`);

const defaultName = name != null ? name : 'Default Name'; // this is fine but there is better syntax for this

// Null Coalescing operator

const defaultNameFromCoalescingOperator = name ?? 'Default Name';

// Optional chaining

const person2 = {
    // company: {
        // website: 'AlgoExpert.io'
    // }
}

console.log(person2.company);

console.log(person2.company.website); /* error message as we try to read website property of undefined property company */

console.log(person?.company?.website ?? 'Foo');


/* Short circuit evaluation, the following code is correct but theres short hand syntax for the same logic */

const shouldRunCode = true;

function logWorld() {
    console.log('Hello World');
}

if (shouldRunCode) {
    logWorld();
}
// 
/* Short circuit evaluation */

shouldRunCode && logWorld(); /* its more concise but makes the code less readable */