console.log(this) /* At the top lever this simply means the global object with is window in a browser, but it
can depends on environments */


/* in a standard function without strict mode, this refers to the global object,
which is the window */
function logThis() {
    console.log(this);
}

/* Arrow functions don't get their own this binding,
we when we use arrow function this keyword is going to refer to what ever it 
was it the environment above this function was */
const logThisArrowFunction = () => {
    console.log(this);
}

const obj = {
    num: 10,
    logThis
}

obj.logThis(); /* This will log out the object that calls the function - {num: 10, logThis: f} */

/* using this keyword in event listener its going to refer to element that 
this event was fired on */
const button = document.querySelector('button');
button.addEventListener('click', logThis);

/* The this argument should almost always be the object */
const boundedLogThis = logThis.bind(obj);

function logThisWithParams(x, y) {
    console.log(this);
    console.log(x, y);
}

boundedLogThis(x, y);

const boundedLogThisWithParameters = logThis.bind(obj, 10, 20); /* these values always going to be passed */

logThis.call(obj, 10, 20); /* this calls the function with bounded this*/

boundLogThis(30) /* 30 is not going to be used as it looks in to the bind parameters first */

logThis.apply(obj, [10, 20]); /* works exactly the same as call but the arguments are passed in the array */

/* using binding on array looping */

[1, 2, 3].forEach(function(num) {
    console.log(this);
    console.log(num);
}, { num: 10}) /* will print this bounded object*/

[1, 2, 3].forEach(num => {
    console.log(this);
    console.log(num);
}, { num: 10}) /* will print window object as arrow functions use the this from
where there were defined */


/* this is bounded to the object that is created */
class Person {
    constructor(name) {
        console.log(this);
        this.name = name;
    }

    speak() {
        console.log('Hello I am ' + this.name);
    }
}

const conner = new Person('Conner');
const clement = new Person('Clement');
conner.speak();
clement.speak();
