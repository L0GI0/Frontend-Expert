const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);

function startTime() {
    setInterval(() => {
        console.log('starting');
    }, 5000) /* runs every 5 second */
}

let timerID;

function stopTime() {
    clearInterval(timerID);
}


function startTime2() {
    timerID = setInterval(() => {
        count.textContent++ /* This will work thanks to type coercion */
    }, 5000) /* runs every 5 second */
}

/* Timeouts */

let timeoutID = setTimeout(() => {
    console.log('timeout')
}, 1000); /* Waits one second and then it calls this function one time */

clearTimeout(timeoutID); /* we cam also use clearInterval as these do the same thing */

/* Animation frames */

let animationFrameID;

function startTimeoutWithAnimationFrame(timestamp) {
    console.log(timestamp);
    count.textContent++;
    animationFrameID = requestAnimationFrame(startTime); /* Every time the browsers is going to repaint we call startTime - 
This usually happens every 60 times per second depending on operating system
    */
}

function stopTimeoutWithAnimationFrame() {
    cancelAnimationFrame(animationFrameID);
}

setTimeout(() => {
    console.log(performance.now()); /* it prints how much milliseconds it took to run this line */
}, 1000);

setTimeout(() => {
    console.log(Date.now()); /* millisecond passed since January February 1st 1970 */
}, 1000)

const date = Date(2025, 0, 10, 9, 25, 10, 30) /* Year, month, day, hour, minutes, second, millisecond */
console.log(date);

const dateFromString = new Date('January 25 2025'); /* Its not recommended as it as the format can differ between browsers */
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getDay());
date.setMonth(9) /* changes month to October (10th month) */