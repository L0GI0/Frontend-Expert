const BASE_API = "http://localhost:8080/api";
const JSON_API = "http://localhost:8080/jsonApi";
const POST_API = "http://localhost:8080/postApi";
const SLOW_API = "http://localhost:8080/slowApi";

console.log(fetch(BASE_API)); /* Promise {<pending> } */

fetch(BASE_API).then(console.log); /* we get response Object back */


fetch(BASE_API + '?firstName=Conner&lastName=Ardman')
    .then(res => res.text())
    .then(console.log)
    .catch(error => console.error('Oh no: ' + error))

/* Instead of concatenating string in a fetch argument we can */

const url = new URL(BASE_API);
url.searchParams.set('firstName', 'Conner');
url.searchParams.set('lastName', 'Ardman');

fetch(url)
.then(res => res.text())
.then(console.log)
.catch(error => console.error('Oh no: ' + error))

console.log('After fetch');

/* Another way to work with API using XMLHttpRequest */

// const request = new XMLHttpRequest();
// request.addEventListener('load', function () {
//     console.log(this.responseText);
// });

// request.open('GET', BASE_API);

// request.send();

/* async and await instead of then chains */

async function main() {

    const url = new URL(BASE_API);
    url.searchParams.set('firstName', 'Conner');
    url.searchParams.set('lastName', 'Ardman');

    try {
    const response = await fetch(url);
    console.log(response.status);
    console.log(response.ok);
    const text = await response.text();
    console.log(text);
    } catch (error) {
        console.error('Oh no: ' + error);
    }
}

main();

async function mainWithJsonAPI() {
    try {
    const response = await fetch(JSON_API);
    const obj = await response.json();
    // or 
    const text = await response.text();
    const obj2 = JSON.parse(text);

    /* If not sure what type of response its going to be return we can use: */

    const responseType = response.headers.get('content-type');

    console.log(obj);
    console.log(obj2); /* obj and obj2 are the same */
    } catch (error) {
        console.error('Oh no: ' + error);
    }
}

mainWithJsonAPI();

async function mainWithPostJsonAPI() {
    const data = {
        name: 'Conner'
    }
    
    try {
    const response = await fetch(POST_API, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });

    // or 
    const text = await response.text();
    const obj = JSON.parse(text);


    } catch (error) {
        console.error('Oh no: ' + error);
    }
}

/* Using headers Class Object : */

mainWithJsonAPI();

async function mainWithPostJsonAPI2() {
    const data = {
        name: 'Conner'
    }

    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    }

    try {
    const response = await fetch(POST_API, options);

    // or 
    const text = await response.text();
    const obj = JSON.parse(text);

    
    console.log(obj)

    } catch (error) {
        console.error('Oh no: ' + error);
    }
}

mainWithPostJsonAPI2();

/* Connecting form */

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault() /* by default it will go in to the URL and refresh the page */

    const options = {
        method: 'POST',
        body: new FormData(form) /* creates an object that has all key value pairs from the form */
    };

    try {
        const response = await fetch(POST_API, options);

        // or 
        const text = await response.text();
        const obj = JSON.parse(text);

        console.log(obj)

    } catch (error) {
        console.error('Oh no: ' + error);
    }
}

/* Working with slow API */

async function mainWithSlowAPI() {

    /* Creating a time out for when request takes too long to respond
    we can use abortController for this */

    const abortController = new AbortController();
    setTimeout(() => abortController.abort(), 2000);

    try {
        const response = await fetch(SLOW_API, {
            signal: abortController.signal
        });
        const text = await response.text();
        console.log(text);
    } catch (error) {
        console.error('Oh no: ' + error);
    }
}

mainWithSlowAPI();