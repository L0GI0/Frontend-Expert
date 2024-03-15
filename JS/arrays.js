const arr = [1, 2, 3, 3, 'hello']; /* we can combine types in array but usually we dont want to do that */
console.log(arr);

const arr2 = new Array(5).fill(0) /* creates array with 5 zeros */;
console.log(arr2);

const emptyArray = new Array();

arr.length = 10; /* its a hacky way to create empty array */

console.log(arr.length); /* we usually want to use array length as a read only property */

arr.length = 1 /* We can also truncate the array */
arr.length = 3;

console.log(arr.includes(3));
console.log(arr.indexOf(3));
console.log(arr.lastIndexOf(3));

arr.push(4);

console.log(arr);

arr.pop(); /* removes last element from the array */

console.log(arr.pop());

arr.push(4, 5, 6);

arr.unshift(4, 5, 6) /* add items at the beginning at the array, its recommended to avoid this function
its much less efficient that push()  */

arr.shift() /* removes the item at the beginning, its also far less efficient that pop() for the same exact reasons */

console.log(typeof arr); /* arr is an object */

console.log(Array.isArray(arr));
console.log(arr instanceof Array);

arr.splice() /* starting index, num of elements we want to delete */

arr.splice(1, 2) /* removes 2 elements starting from index 1 */

console.log(arr);

arr.splice(0, 1);

ar.splice(0, 2, 'hello'); /* adds hello at index 0 and removes item at index 1 */

arr.splice(1, 0, 'hello', 'world');

arr.slice(1, 3);

const newArr = arr.splice(1, 3);

console.log(newArr);

const concatenatedArray = arr.concat(['hello', 'world']); /* It combines two arrays */

arr.reverse() /* flips the order of the array */

const stringFromArray = arr.join(' | ') /* combines all the elements into a single string */

console.log(stringFromArray);

let i = 0; /* if needs index dont use for of loop*/

for (const value of arr) {
    i++;
    console.log(value);
}

arr.forEach(function(value, index, array) {
    console.log(value, index, array, this); /* usually third property is not
    used as we usually have access to the array */
}, {num: 10});


const mappedArray = arr.map(function(value, index) {
    return value + index + this.num;
}, {num: 10})

console.log(mappedArray);


const filteredArray = arr.filter(function(value, index) {
    return value > this.num; /* adds values that has value bigger than this.num */
}, {num: 1})

const foundValue = arr.find(function(value, index, array) {
    return value > this.num;
}, { num: 1})

const foundIndex = arr.findIndex(function(value, index) {
    return value > 1;
})

const isAllElementsBiggerThan1 = arr.every(function(value, index) {
    return value > 1;
})

const isAnyElementBiggerThan1 = arr.some(function(value, index) {
    return value > 1;
})

const sumOfArray = arr.reduce(function(accumulator, currentValue, index, array) {
    return accumulator + currentValue;
}, 0) /* there is no way to pass this argument to this */

const sumOfArray2 = arr.reduceRight(function(acumulator, currentValue) {
    return acumulator - currentValue;
})

arr.sort();

console.log(arr);

/* custom comparision function for sort */


arr.sort(compareNumbers);

function compareNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber; /* ascending order */
}

function compareNumbers3AlwaysFirst(firstNumber, secondNumber) {

    if(firstNumber === 3) {
        return -1;
    }

    if(secondNumber === 3){
        return 1;
    }

    return firstNumber - secondNumber; /* ascending order */
}