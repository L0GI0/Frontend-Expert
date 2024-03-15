const globalNum = 5;


/* A Closure means that there is access in a function to the outer scope within the
inner function and this is created when the function is declared, not when its called */

/* When the function is executed its going to look in to the
local scope first, and then if it can the identifier its looking for
then its going to look in the parent environment */

function logNum() {
    const localNum = 1;
    console.log(globalNum + localNum);
}

logNum();

function example() {
    const num = 5;

    return function () {
        console.log(num);
    }
}

/* in some languages the const num = 5 would be garbage collected after example() is done executing,
but in JavaScript it creates a Closure and it keeps access to its parents scope */
const innerFunction = example();

innerFunction();

/* Some useful applications of closures, one of the most common one are private methods */

function makeFunctions() {

    let privateNum = 0;

    function privateIncrement() {
        privateNum++;
    }

    return {
        logNum: () => console.log(privateNum),
        increment: () => {
            privateIncrement();
            console.log('Incremented!');
        }
    }
}

/* logNum and logNum2 have different parent environments which were
created at makeFunctions() call */
const { logNum, increment } = makeFunctions();
const { logNum: logNum2, increment: increment2 } = makeFunctions();

logNum();
increment();
logNum();

logNum2();
increment2();
logNum2();

/* Common example in tech interviews */

/* This will log out 1 2 3 as setTimeout has access to ints parent environment even
after loop is finished */
for(let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 500);
}

/* Here we are going to get 3 3 3 -  let is bloc scoped, only scoped to curly braces 
it creates new version of that variable with each iteration of the loop, each time loop created a closure
with let it was different variable each time. Var is function scoped, globally, as we are not in a function and even though
we have 3 different closures they are pointing to the same var variable */
for(var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 500);
}

console.log(i) // we get a 3 here
