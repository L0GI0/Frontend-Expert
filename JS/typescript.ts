/* Allows typing of variables */

let test: number = 123;

test = '456';

console.log(test);

enum State {
    On = 'on',
    Off = 'off'
}

enum State2 {
    On, // 0
    Off // 1
}

let test2: State = State.Off;
test2 = State.On;

function add(x: number, y: number): number {
    return x + y;
}

console.log(add(1, 2));

interface Instructor {
    name: String;
    course: String;
    age?: number;
}

class AlgoExpertInstructor implements Instructor {
    name: String;
    course: String; // upper case string is a JS String Object we can use it interchangeably with a string 

    constructor(name: string) {
        this.name = name;
        this.course = 'AlgoExpert';
    }
}

/* Generics */

const arr: Array<number> = [1, 2, 3];

interface GetterSetter<Key, Value> {
    set: (key: Key, value: Value) => void;
    get: (key: Key) => Value; 
}

class StringNumGetterSetter implements GetterSetter<string, number> {
    map: Map<string, number> = new Map();

    set(key: string, value: number): void {
        this.map.set(key, value);
    }

    get(key: string): number {
        return this.map.get(key);
    }
}