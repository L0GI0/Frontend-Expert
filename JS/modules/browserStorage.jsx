/* Cookies - most traditional form of a storage, they are simply key values pairs.
Have confusing API to work with*/

/* String containing cookies set for the page. Cookies can also be send by a server or by
JS like we are doing it here. It has getter and setter functions so it we can completely override it */
console.log(document.cookie);

document.cookie = 'user=Conner';
document.cookie = 'course=FrontendExpert' // the user cookie is not being removed

/* Event though we set a cookie again it doesn't remove previous cookies until they expire */

/* */

document.cookie = 'user=Clement'; // it override the user cookie

/* Removing a cookie, we need to add an expiration time */

document.cookie = `user=Clement; expires=${new Date().toUTCString()}`;

/* We can also use max-age which works like an expiration but instead of being a time
its a number of second */

document.cookie = `user=Clement; max-age=0`;

document.cookie = `user=Clement; path=/mydirectory`; /* sets cookie to a specific path */

document.cookie = `user=Clement; secure`; /* work only through https not http */

document.cookie = `user=Clement; secure samesite=strict`; /* We don't want this cookie to be used crossed origin */

const course = document
    .cookie
    .split('; ')
    .find(cookie => cookie.startsWith('course='))
    .split('=')[1];

console.log(course);


/* Local Storage */

localStorage.setItem('user', 'Conner');
localStorage.setItem('course', 'FrontendExpert');
console.log(localStorage.getItem('user'));
localStorage.removeItem('user');
console.log(localStorage.getItem('user')); // null
localStorage.clear(); // Removes everything from local storage

/* Session storage works the same way except instead of localStorage we use sessionStorage instead */

/* Indexed DB - Object store DataBase. This is not relational DB */

const request = indexDB.open('myDatabase', 1);


/* Will fire when ever request in creating new DB or if new version number is created */
request.addEventListener('upgradeneeded', event => {
    const database = event.target.result;
    const store = database.createObjectStore('users', {keyPath: 'id'});
    
    /* creating indexes */

    store.createIndex('name', 'name'); /* name for the index, second determines object key when we search
    for specific record */

    store.add({
        id: 0,
        name: 'Conner',
        course: 'FrontendExpert'
    });
    store.add({
        id: 1,
        name: 'Clement',
        course: 'AlgoExpert'
    })
})

/* Success event runs when ever we connect to a DataBase successfully */
request.addEventListener('upgradeneeded', event => {
    const database = event.target.result;

    /* now here we can use transaction to update the DB */
    database
        .transaction(['users'], 'readwrite')
        .objectStore('users')
        .add({
            id: 2,
            name: 'Ryan',
            course: 'MLExpert'
        });

        /* removing from DB using primary key*/
        database
        .transaction(['users'], 'readwrite')
        .objectStore('users')
        .delete(1);

        /* getting values from DB. Get is asynchronous */
        const req = database
        .transaction(['users'], 'readwrite')
        .objectStore('users')
        .get(0);

        req.addEventListener('success', event => {
            console.log(event.target.result.name);
        })

        /* we can also use index that we created to get records from the DB store */

        const indexReq = database
        .transaction(['users'], 'readwrite')
        .objectStore('users')
        .index('name')
        .get('Conner'); /* It will return the first found if there are similar names */

        req.addEventListener('success', event => {
            console.log(event.target.result.course);
        })
});

/* For cookies its recommended to use a dedicated library as its easier to work it. The most 
recommended is to use localStore and sessionStorage as it take the least code */