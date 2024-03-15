

const generator = genNumbers();

console.log(generator.next()) /* executes the function until it gets in to the yield command */
console.log(generator.next());
console.log(generator.next()); // { value: 3, done: true }
console.log(generator.next()); // { value: undefined, done: true }

function* genNumbersForLoop(count) { 
    for(let i = 0; i < count; i++) {
        yield i;
    }
}

const generatorWithLoop = genNumbersForLoop(3)

for (value of generatorWithLoop) {
    console.log(value);
}

/* We can also pas values to the generator functions */

function genNumbersWithParams() {
    const value = yield 0;
    yield value + 3;
}

generator.next();
generator.next(5);

/* ceasing the generator with return */

generator.return(5);

/* ceasing the generator with throwing an error */

generator.throw(new Error('There was an error'));

/* Yielding to Generators */

function* generator1() {
    yield 1;
    yield 2;
}

function* generator2() {
    yield 3;
    yield 4;
}

function *yieldingOtherGenerators() {
    yield* generator1();
    yield 2.5;
    yield* generator2();
}

const generatorYieldingOtherGenerators = yieldingOtherGenerators();

console.log(generatorYieldingOtherGenerators.next())
console.log(generatorYieldingOtherGenerators.next());
console.log(generatorYieldingOtherGenerators.next());
console.log(generatorYieldingOtherGenerators.next());
console.log(generatorYieldingOtherGenerators.next());

for (value of generatorYieldingOtherGenerators ) {
    console.log(value);
}