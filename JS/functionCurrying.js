function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(1, 4, 10));

/* The goal is to create new function where each parameter is 
its function call */

/* Thanks to the closure created all of the arguments are available in the most inner function */
function curriedSum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(carriedSum(1)(4)(10));

/* We can also create a function to do it for us */

function curry(func) {
    return function(a) {
        return function(b) {
            return function(c) {
                return func(a, b, c);
            }
        }        
    }
}

function subtract(a, b, c) {
    return a - b - c;
}

const curriedSum = curry(sum);
const curriedSubtract = curry(subtract);

console.log(curriedSubtract(1)(4)(10));

function arrowFunctionsCurry(func) {
 return (a) => (b) => (c) => func(a, b, c);
}

/* Most of the time we want to call functions using their standard syntax */


function addFour(b, c) {
    return 4 + b + c;
}

/* With curried function we can make it simpler */

const addFourCurried = curriedSum(4) /* It allows to save portions of a function call to a certain parameters 
in a nic clean concise way */

console.log(addFour(10)(10)) /* */