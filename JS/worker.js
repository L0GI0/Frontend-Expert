for(let i = 0; i < 300000000; i++) {
    1 + 2;
}

console.log('slow operation finished');

/* this wont work as in web workers there is no access to the document object 
so can't do any DOM Operations */
document.body += 'hello';

/* self is reference to the worker global scope which is similar to window object in
standard js files */
self.addEventListener('message', event => {
    console.log(event.data);
    self.postMessage(event.data = 10); // We can simply do postMessage(event.data = 10);
})

onmessage = function(event) {
    console.log(event.data);
}

/* To allow the worker to be shared we need to listen to a connect event first as there can be 
multiple connections and we need to handle them individually */
addEventListener('connect', event => {

    const port = event.ports[0];
    port.onmessage = function(event) {
        console.log(event.data);
        port.postMessage(event.data + 10);
    }
})

/* most of the time we want expensive operations to run on a server instead of 
a web worker. As browser is not as powerful but sometimes web workers still can be useful */

console.log('slow operation finished');