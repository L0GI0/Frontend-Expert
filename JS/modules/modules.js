import algoExpert, { frontendExpert, algoExpert as algo } from './helpers.js'; /* we can use as if there are name conflicts 
for imported modules */
import Person from './Person.js'

frontendExpert();
algo();

const conner = new Person('Conner');
conner.sayHello();

/* We want our variables and functions be available only in their files not globally as this can
cause naming conflicts */

/* We can wrap our code in a Immediately Invoked Function Expression to make the code
available immediately only inside the function imitating a module */

(function() {
    frontendExpert();

    const conner = new Person('Conner');
    conner.sayHello();
})(); /* none of this code is in a global namespace */

const shouldSayFrontend = true;

if(shouldSayFrontend) {
    frontendExpert(); /* we import always frontendExpert() even though its used conditionally */
}

/* if the module is coming from a server, very long module that takes long time to parse then
we need to be careful of when to import the module */

if(shouldSayFrontend) {
    const { frontendExpert } = await import('./helpers.js'); /* await keyword even when we are inside the async function 
    the type="module" in html allows to await for the module. Also the module code is run in strict mode and it 
    changes the .this to undefined instead of window in standard code  */
    frontendExpert();
}

