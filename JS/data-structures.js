/* DataStructures in JS */

/* We can emulate stack with arrays as there is no stack Data Structure build in to 
the JS */
const stack = [];

stack.push(1);
stack.push(2);
console.log(stack.pop()); /* FIFO */

/* Same for queue */

const queue = [];
queue.push(1);
queue.push(2);
console.log(queue.shift()) /* LIFO */

/* Maps - Dictionaries */

const map = new Map();
map.set('test', 123);
map.set(10, 'ten');

console.log(map.get(10));
console.log(map.size);
console.log(map.has(10));

map.set({}, 42);
console.log(map.has({})) /* false as {} !== {} due to
reference comparison - so its a different obj key in a map than passed
to has function */ 

const obj = {};
map.set(obj, 42);
console.log(map.has(obj)) // now it is going to be true as these are same objects
console.log(map.has('ten'));

map.delete(10);

map.clear() /* Removes everything from the map */

for ([key, value] of map ) {
    console.log(key, value);
}

map.forEach((key, value) => {
    console.log(key, value);
})

/* creating iterator over a map */

const iter = map.entries();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

/* We can also use */

map.values(); // just for values
map.keys();  // just for keys


/* Question is when to use a Map and when to use Object - often times it doesn't matter 
which one to use. There are time when it does matter
- need a string that is not a string or symbol
- Insertion order is significant (its always kept so when iterating
    we wil get items in order they were created)

When there is something simple its better to use obj, and when we are sending something 
though API request its better to use obj as Map is not serializable into a JSON.
Also when we need a prototype inheritance we need to use object
*/

/* We can create Maps from Arrays in a format we tend to get when we iterate through the map
then we actually pass it to the constructor instead of assigning the values separately */

const mapFromArray = new Ma([['test', 123], [10, 'ten']]);

/* Sets */

/* Very similar to Maps but its just a set of unique value not key value pairs */

const set = new Set([123, 456]); // sa,e as adding
set.add(123);
set.add(456);

console.log(set.has(123)) // true

// no get function as there is no value to get

set.add({});
set.has({}); // false as these are different objects
set.clear(); // removes all the elements from the set 

console.log(set.has(123));

for (value of set) {
    console.log(value);
};

set.forEach(value => {
    console.log(value);
});

const setIterator = set.values(); // we sill can use entries() and keys() only the values are same as keys

console.log(setIterator.next().value);

// We can use Sets to remove duplicates from an Array

const arr = [1, 2, 2, 3, 4];
console.log(Array.from(new Set(arr))); // takes an Iterable and converts it to an Array - [1, 2, 3, 4];

// WeakSet:

const weakSet = new WeakSet();
weakSet.add(123); // this will give an error as weak sets accepts only objects 
weakSet.add({}); // works, weakset doesn't prevent garbage collector to remove objects 

// An example of WeakSet usage

(function() {
    const obj = {};
    weakSet.add(obj);
})(); // The object can be garbage collected after the function is invoked because its nothing is using it anymore

/* Because of way of how weakSet and weakMap are implemented they cannot be iterated and we can check its size */

console.log(weakSet.size) // undefined

/* Linked List implementation */

class Node {
    constructor() {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addStart(value) {
        const node = new Node(value);
        const tempHead = this.head; // we need to next value of new head to be equal to the previous head
        this.head = node;
        node.next = tempHead;
    }

    addEnd(value) {
        const node = new Node(value);
        let curr = this.head;

        if(curr == null) {
            this.head = node;
            return;
        }

        while(curr != null && curr.next != null) {
            curr = curr.next;
        }

        curr.next = node;
    }
}

const list = new LinkedList();
list.addStart(1);
list.addStart(2);
list.addEnd(3);
console.log(list.head.value);
console.log(list.head.next.value);
console.log(list.head.next.next.value);

