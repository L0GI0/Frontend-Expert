// state => pending, fulfilled, rejected 


const promise = new Promise((resolve, reject) => {
    /* resolve and reject are functions that can be used to 
    change the state of the promise */
    resolve(2);
});

console.log(promise); /* Promise { <pending> }  - default state of an promise */

const timedOutPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
})

console.log(timedOutPromise) /* Will log out the Promise { <pending> as promise 
    did't get resolved in time */

promise.then(value => console.log(value)); /* .then is going to wait for Promise to settle as it 
return value to the .then function */

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Something went wrong')), 1000);
})

rejectedPromise.then(value => console.log(value), error => console.log('Oh No ' + error));

/* Does the same thing as the code above with a little nicer syntax */

rejectedPromise.then(console.log).catch(error => console.log('Oh No ' + error));

/* this are functions that return settled promise, rather than pending
they already going to be resolved or rejected */

const settledResolvedPromise = new Promise.resolve(3);

settledResolvedPromise
    .then(value => value * 2)
    .then(value => value + 1)
    .then(console.log);

/* Throwing an error reject a promise implicitly */

settledResolvedPromise
    .then(value => value * 2)
    .then(value => value + 1)
    .then(value => {
        throw new Error('Something went wrong');
    })
    .then(console.log)
    .catch(error => {
        console.log('Oh No ' + error)
        return 10;
    }).then(console.log)
    .finally(() => console.log('Done')) /* The .finally function is always going to run, no matter if
    promise is rejected or not */

Promise.all([
    Promise.resolve(3),
    Promise.resolve(5)
]).then(console.log) /* Takes an array of promises and returns new Promise - 
will log out [3, 5] an array of all the Promises after waiting for
all of them to be resolved */


Promise.all([
    Promise.resolve(3),
    Promise.resolve(5),
    new Promise((res, rej) => setTimeout(() => res(5), 1000))
    ])
    .then(console.log)
    .catch(console.log) 
/* Waits for all the promises to be resolved, if
any of these rejects then the whole thing rejects */


Promise.race([
    new Promise((res, rej) => setTimeout(() => res(1.5), 1500)),
    new Promise((res, rej) => setTimeout(() => res(2), 2000)),
    new Promise((res, rej) => setTimeout(() => res(1), 1000)),
    new Promise((res, rej) => setTimeout(() => rej('Oh No'), 500)),
    ])
    .then(console.log)
    .catch(console.log) /* Returns a Promise which ever ends first. It rejects only
when first Promise is rejected */


Promise.any([
    new Promise((res, rej) => setTimeout(() => res(1.5), 1500)),
    new Promise((res, rej) => setTimeout(() => res(2), 2000)),
    new Promise((res, rej) => setTimeout(() => res(1), 1000)),
    new Promise((res, rej) => setTimeout(() => rej('Oh No'), 500)),
])
    .then(console.log)
    .catch(() => console.log('All rejected')); /* Returns a Promise which ever resolves successfully first. It rejects only
    when none of them resolves but rejects with 'All promises were rejected' error */

/* async and await */

async function tester() { /* Marks function as asynchronous */
    return 3;
}

console.log(tester()); /* Prints Promise { 3 } as async wraps returned value of a function 
in to a Promise */

async function tester2() { /* Marks function as asynchronous */
    const value = await new Promise((res, rej) => setTimeout(() => res(3)), 1000);
    console.log(value);
}

tester2();

async function tester4() { /* Marks function as asynchronous */
    return await new Promise((res, rej) => setTimeout(() => rej(3)), 1000);
}

/* async await and then catch syntaxes can be combined */

tester4().then(console.log).catch(error => console.log('Oh No ' + error));