export class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hi, this is ${this.name}`);
    }
}

export { Person as default}; /* same as export default Person */