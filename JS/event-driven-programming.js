const button = document.querySelector('button');

button.addEventListener('click', onClick);

document.body.addEventListener('click', onClick);

function onClick(event) {

    event.stopPropagation(); // stops propagation of event
    event.preventDefault(); /* Stops what ever the default behavior for that elements 
    in the browser is */
    console.log(event);
    console.log(event.type); /* click */
    console.log(event.target); /* <button>Click Me</button> - returns elements
    that was clicked on */
    console.log(this); /* works similarly to event.target but it always
    returns on which the elements that event listener is bound to */
    console.log('You clicked the button');
}

button.addEventListener('click', onClick, true); /* adding true sets the fire event to happened
during the capturing phase. It creates a capturing Event */

const abortController = new AbortController(); /* The idea is that we can
abort an event */

abortController.abort(); /* Whenever we call it its going to remove the event listener */

button.addEventListener('click', onClick, {
    capture: true,
    once: true, /* After the event is fired for the first time the
    element is removed and the event happens only one time */
    passive: true, /* it tells the browser
    ahead of time wether it needs to the event.preventDefault() should be 
    ran or not and it can be done more efficiently especially for
    touchstart and touchmove to indicate the browser that scrolling will not
    be cancelled */
    signal: abortController.signal
}); /* we can also use event options */

/* We can also manually remove an event listener */

button.removeEventListener('click', onClick);

button.addEventListener('dblclick', onClick()); /* double click event */

button.removeEventListener('mousedown', onClick);

button.removeEventListener('mouseup', onClick);

/* keyboard presses */

window.addEventListener('keydown', event => {
    console.log(event.code) /* will get the code for whenever key is clicked */
});

window.addEventListener('keydown', event => {
    console.log(event.code) /* will get the code for whenever key is clicked when released */
});

scrollable.addEventListener('scroll', event => {
    console.log(event.target.scrollTop); /* Tells how far the elements is scrolled */
});

scrollable.addEventListener('mouseenter', event => {
    console.log(event.pageX, event.pageY); /* gives coordinates of mouse position 
    whenever it enters the element */
});

/* drag event. The elements needs an attribute e.g. <button draggable="true">Click here!</button> */

button.addEventListener('dragstart', event => {
    console.log(event);
});

scrollable.addEventListener('drop', event => {
    scrollable.prepend(button);
})

scrollable.addEventListener('dragover', event => {
    event.preventDefault(); /* this allows to use drop event */
})

/* Event delegation - use event propagation to add only one event listener to parent 
instead of multiple ones to child elements */

scrollable.addEventListener('click', event => {
    if(event.target !== this) {
        event.target.textContent = 'Clicked';
    }
});