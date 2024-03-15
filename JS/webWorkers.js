/* Web workers are not part of JS. The web workers API are provided by the browsers and 
it allows to run the code in a separate thread */

/* We need to wait until slow operation finishes 
before sayHello function actually took any effect */

const slowButton = document.getElementById('slow');
const sayHelloButton = document.getElementById('say-hello');

slowButton.addEventListener('click', slowOperation);
sayHelloButton.addEventListener('click', sayHello);

function slowOperation() {

    /* to fix blocking by slow operation we can use web worker */
    const worker = new Worker('worker.js'); // Can pass any file


    /* We can send messages to the web workers */
    worker.postMessage(10);

    worker.addEventListener('message', event => {
        console.log(event.data);
    })

    worker.terminate(); // stops the workers code

    /* Dedicated worker is a worker that is only available 
    in a script that created them, what we can do instead is
    a shared worker which can be accessible by different tabs in same
    domain or even iFrames */

    const sharedWorker = SharedWorker('worker.js');

    sharedWorker.port.postMessage(10); // in shared worker everything will be send to specific port

    sharedWorker.port.onMessage = function(event) {
        console.log(event.data);
    }

    // We can also use event listener but we will need to start the port. It happens automatically in onMessage

    /* Move the code that is time consuming to web worker file */
    // for(let i = 0; i < 300000000; i++) {
    //     1 + 2;
    // }
    // console.log('slow operation finished');
}

/* when using web worker, the slow operation is not blocking the sayHello 
callback */
function sayHello() {
    console.log('hello world');
}