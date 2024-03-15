/* Event loop - ofter referred as Concurrency Model within the JavaScript.
JS is actually single threaded */

/* JS Engine - program to execute JS Code */
/* Each browser has JS Engine */

/* Js Engine has Heap for memory allocation and Call Stack used for keeping 
track currently executing functions */

/* The JS Code is ran in JavaScript Runtime Environment - This provides set of 
extra functionality on top of core JS Language known as Web APIs - these include fetch, timers,
dom manipulation functions and more. So when we call setTimout it calls a WebAPI and it runs completely
separately  on its own outside of JS Engine */

/* If there is a big slow function. The concept of Chunking can be used in order to split slow task
into smaller ones while getting advantage of using setTimeouts */