const myKey = 'key';

const website = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
    isAwesome: true,
    'multi word key': 0,
    [myKey]: 1234,
};


console.log(website);
console.log(website['name']);
console.log(['multi word key']);

const key = 'name';

console.log(website[key]);

website.key;

/* trying access a property that doesnt exist we will just get undefined */


website.name = 'FrontendExpert';
console.log(webiste.name);

website.foo ='bar'; /* we can add new key vale pair */
console.log(website);

delete website.foo;
console.log(website);

/* This condition will always return false*/

console.log({} === {});

const obj = {};

console.log(obj === obj); /* this will be true */

const name = 'Conner';

const obj2 = {
    name /* equals to name: name - its just shorthand notation */
}

console.log(obj2);

/* Another way to create object */

const constructedObj = new Object();

constructedObj.name = 'Conner';

console.log(constructedObj);

/* Constructor functions */

function Website(name, rating, founders) { /* Naming convention for constructor functions with upper case */
    this.name = name;
    this.rating = rating;
    this.founders = founders;
}

const frontendExpert = new Website('FrontendExpert', 5, 'Conner');
console.log(frontendExpert);

/* Symbol */

const id = Symbol('id') /* its a unique identifier - primitive type but two calls 
to Symbol() will return different identifiers */

const id2 = Symbol('id');

const id3 = Symbol.for('id3');
const id4 = Symbol.for('id4');

console.log(id3 === id4) /* this will be true. it comes from global symbol registry */

console.log(id === id2);

const obj3 = {
    [id]: 1234,
    [id2]: 0,
    id: 'hello',
}

console.log(obj3);

/* Checking if object contains key */

console.log('name' in website) /* this will log out true */

console.log(website.hasOwnProperty('name'));

console.log('toString' in website) /* this will be true as this also check for prototype property */
console.log(website.hasOwnProperty('toString'));
console.log(website.name !== undefined)


/* Adding methods */

const website2 = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
    sayHello: () => console.log('hello'),
    sayHelloObjSyntax() {
        console.log('world');
    },
    get getRating() {
        return this.rating;
    },

    get getDoubledRating() {
        return this.rating * 2;
    },

    set setRating(value) {
        this.rating = rating;
    }
}

website2.hello();

console.log(website.getRating); /* we can use getter function as standard property */
website.setRating = 6;
console.log(website.getRating);
console.log(website.getDoubledRating);

/* Object inheritance */

const obj4 = {
    foo: 'bar',
    __proto__: website2,
    [Symbol('id')]: 0,
};

console.log(obj4); /* it will not log any properties but website2 
properties are available through prototype */

console.log(obj4.name)

/* Iterating over an object */

console.log(Object.keys(obj4)); /* Returns an array with own keys and symbols [] */

console.log(Object.values(obj4));

console.log(Object.entries(obj)); /* keys and values */

Object.entries(obj4).forEach(function(value) {
    console.log(value);
})

Object.entries(obj4).forEach(function([key, value]) {
    console.log(key, value);
})

for(key in obj4) { /* the key difference is going to include inherited properties
through __proto__ property */
    console.log(key);
}

/* Copying an object */

const myObj = {
    original: 123,
}

Object.assign(myObj, obj); /* copies all the properties from obj to myObj besides non enumerable */

constole.log(myObj);

Object.freeze(website); /* We can no longer change this object */
website.name = "FrontendExpert"; /* This is not going to work. This behavior differs on strict mode */
console.log(website);

console.log(Object.isFrozen(website));

console.log(website);

Object.seal(website); /* you can still change properties but i won't be able any new properties*/

console.log(Object.isSealed(website));

website.toString(); /* return string version of an object */

console.log(website.toString());  /* By default toString() on an object will return '[object Object]' */


/* We can change toString behavior: */

website.toString = function() {
    return 'Hello world';
}

console.log(website.toString()) /* will print hello world */

console.log(website.valueOf()); /* this prints the object. Its usually used when 
object needs to be converted into a primitive */

website.valueOf = function() {
    return 2;
}

console.log(website - 1); /* will log out 1 */

/* Defining how obj should be casted to primitive. Its not edited too often */

const obj5 = {
    name: 'AlboExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
    [Symbol.toPrimitive](hint) {
        if(hint === 'number') {
            return 5;
        } else if (hint === 'string') {
            return 'hello';
        }
        return 2;
    }
}

console.log(Number(obj5)) /* this will log out 5 */

console.log(String(obj5)); /* this will log out 'hello' */

console.log(10 - obj5); /* this will give 10 - 5 = 5*/
console.log(10 + obj5) /* this will give 10 + 2 = 12 and the reason
is that + sign is ambiguous, it can be either addition of numbers or
concatenation of string */