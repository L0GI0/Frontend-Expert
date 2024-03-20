class EventTarget {
  // Write your code here.

  events = {
  
  }
  
  addEventListener(name, callback) {
    // Write your code here.
    console.log(`Func name = ${callback.name}`)

    this.events[name] = callback;
  }

  removeEventListener(name, callback) {
    // Write your code here.
    if(this.events.hasOwnProperty(name))
      delete this.events[name];
  }

  dispatchEvent(name) {
    // Write your code here.
    if(this.events.hasOwnProperty(name))
      this.events[name]();
  }

}

const target = new EventTarget();

const logHello = () => console.log('hello');
const logWorld = () => console.log('world');

target.addEventListener('hello', logHello);
target.addEventListener('world', logWorld);

target.dispatchEvent('hello');
target.dispatchEvent('world');

target.removeEventListener('hello', logHello);

target.dispatchEvent('hello');
target.dispatchEvent('world');