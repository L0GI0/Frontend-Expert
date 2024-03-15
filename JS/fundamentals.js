
let i = 0;

while(i < 4) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i < 4) /* this runs at least once, the condition if check after while loop is ran one time */

for (const value of [1, 2, 3]) {
  console.log(value);
}

for (const value of 'abc') {
  console.log(value);
}

/* iteraing an object */

const obj = {
  name: 'Conner',
  course: 'FrontendExpert'
}

for (const key in obj) /* instead of we use in key word */ {
  console.log(key);
  console.log(obj[key]);
  console.log(key, obj[key]); /* console log can take comma separated values */
}

[1, 2, 3, 4].forEach(function(value) {
  console.log(value);
}) /* here we use anonymous syntax for a function definition */

/* Conditionals */

const condition = true;

if(condition) {
  console.log('It was true');
} else {
  console.log('It was false');
}

const condition2 = null;

if(condition2) {
  console.log('It was true');
} else if (condition2 === false) {
  console.log('It was false');
} else {
  console.log('Default');
}

/* Swich */

const myNum = 2;

switch(myNum) {
  case 1:
    console.log('It was 1');
    break;
  case 2:
  case 3:
    console.log('It was 3');
    break;
  default:
    console.log('Default');
}

/* Tenary operators */

const myNum2 = 10;

console.log(myNum > 5 ? 'Greater than 5': 'Less than 5');

/* Error Handling */

{
throw 'Oh no';

throw new Error('Oh No'); /* Throwing in new Error Object */

/* Catching the object */

try {
    throw new Error('Oh No');
} catch (error) {
    console.log(error);
}
}

console.log('value');
console.error('error message'); /* will display as an red message and will be marked as error in browsers*/
console.debug('Debug message');
console.table([[1 , 2], ['hello', 'world']]) /* prints as table, can be usefull if debugging something */
console.count();
console.count();
console.countReset();

console.count('key');
console.count();
console.countReset('key');
console.count();
console.count('key');

console.timeLog(); /* logs current time of running the app */

for(let i = 0; i < 100000; i++) {}

console.timeLog();
console.timeEnd();
console.time();

for(let i = 0; i < 100000; i++) {}

console.timeLog()
console.timeEnd();

console.time('key');

for(let i = 0; i < 100000; i++) {}

console.timeEnd('key');
console.time();

for(let i = 0; i < 100000; i++) {}

console.timeEnd();

/* Logs where we are in the code */
console.trace();

function foo() {
    console.trace(); // will say we are in foo() function
}

/* Strict mode */


'use strict'; // need to add this at the beginning of the file

x = 5; // this would work without strict mode

function foo() {
    'use strict' // can use strict mode at the function level
    let x = 5;
}

y = 5;
foo();