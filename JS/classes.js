const person = {
    isHuman: true
};

const child = Object.create(person); /* its doing child[[Prototype]] = person | child.__proto__ = person; */

child.__proto__ = person; /* its not recommended */

console.log(person);

child.maxAge = 18; /* Prototype chain is only in one direction */

console.log(child) /* it will print empty object {} but child.isHuman 
will return true as this property exits in prototype of the object */

const child2 = Object.assign(Object.create(person), {
    maxAge: 18
}) /* this will add person values to child object*/


Object.setPrototypeOf(child, person); /* Browsers are not very optimized to reassign the prototype so its not used too much */

const child3 = {
    maxAge: 18,
    __proto__: person /* its older syntax not used much anymore */
}

const child4 = Object.create(person, {
    maxAge: {
        value: 18,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

const john = Object.create(child);
john.name = 'John';

console.log(john);
console.log(john.__proto__); /* this will log child object */
console.log(john.__proto__.__proto__); /* this will log person object as its child prototype */
console.log(Object.getPrototypeOf(john));

child.maxAge = 19; /* This will change the property for john object as well as its in prototype chain,
its not copying over the values, the prototype is copying the reference to the object */

console.log(john.maxAge);


/* Here wa can see that functions and arrays are actually object pointing to Object or Array __proto__ which has its own 
defined properties */
const funcProto = Object.getPrototypeOf(() => {});
console.log(Object.getOwnPropertyNames(funcProto)); 

const arrayProto = Object.getPrototypeOf([]);
console.log(Object.getOwnPropertyNames(arrayProto));

/* Deeper dive in function constructors */

function Person(name) {
    this.name = name;
}

/* The new keyword sets the prototype of an object in to the FunctionName.prototype object 
and then it calls the constructor function itself */

Person.prototype = {
    constructor: Person,
    isHuman: true
}

const conner = new Person('Conner')
const clement = new conner.constructor('Clement'); // new Person === connect.constructor

console.log(Object.getPrototypeOf(conner) === Object.getPrototypeOf(clement)) /* this is going to be true as object of the
same creator function share same prototype */

conner.__proto__.test = 'test';

console.log(clement.test) // this is going to work

Person.prototype.speak = function() {
    console.log('Hell this is ' + this.name);
    console.log(this.isHuman);
}

conner.speak();
clement.speak();

/* instanceof operator */

/* what it really checks is, if is somewhere of the prototype chain a Person.prototype object */
console.log(conner instanceof Person); // this is going to be true
console.log(clement instanceof Person); // this is going to be true
console.log(clement instanceof Object) // true
console.log(conner instanceof Array) // false

Object.setPrototypeOf(conner, Array.prototype);

//Now this is true

conner instanceof Array;

/* We can define function in prototype */

/* This concept is called polyfill - bunch of functions 
defined that browsers does not have */
Array.prototype.myPush = function(value) {
    this[this.length] = value;
}

/* These are usually put in a if statement */
if(Array.prototype.push === undefined) {
    Array.prototype.push = function(value) {
        this[this.length] = value;
    }
}

const arr = [1, 2, 3];

arr.myPush(4);
console.log(arr);


/* Modern Class syntax */

class Person {

    static staticIsHuman = false;

    isHuman = true;

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log('Hello this is ' + this.name);
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }

    static greet() {
        console.log('Hello');
    }
}

const conner = new Person('Conner');
const clement2 = new Person('Clement');

conner.speak();
conner.isHuman = false;

/* These are instance properties */
console.log(conner.isHuman); // false
console.log(clement2.isHuman) // true

console.log(conner.staticIsHuman); // undefined
console.log(clement2.staticIsHuman) // undefined

console.log(Person.staticIsHuman) /* false */
console.log(Person.greet()) /*  */
console.log(clement2.greet()) // undefined

class Child extends Person {

    #age; // private field
    
    constructor(name, age) {
        super(name);
        this.#age = age;
    }
}

const child = new Child('John', 10);
child.speak();
console.log(child instanceof Person) // true 
console.log(Person instanceof Function) // true

class GrandChild extends Child {
    getAge() {
        console.log(this.#age) // not available
    }
}