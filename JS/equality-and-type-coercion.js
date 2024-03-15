console.log(5 == 5); // 'loose' equality - comparing only values
console.log(5 === 5); // 'strict' equality - comparing type and values

/* the string 5 is converted to number 5 */
console.log(5 == '5'); // true because it does implicit type coercion 

console.log(5 === '5') // false

/* explicit type coercion */

Number(false) /* Converts false in to 0 */
Number(true) /* Converts true in to 1 */

console.log(true == 1) /* This is true because of implicit coercion of tru to 1*/

console.log(false == 0) // true

console.log(Boolean(10)) // true

console.log(Boolean(0)) // false

console.log(String(0)) // '0'

NaN // result of doing math thats not a number

console.log(Number('abc')) // NaN - Not a Number

console.log(NaN == NaN) // false, NaN is not equal to anything

console.log('abc' == NaN); // 'abc' is coerced to a NaN as string are converted to number web compared with number

if(x === null || x === undefined) { // this is perfect and valid code

}

if ( x == null){} // is same as if(x === null || x === undefined)

console.log(null == null) // true

console.log(null == undefined) // true

console.log(null === undefined) // false

console.log(null == 0) // false
console.log(null == 'null') // false

console.log({} == {}); // this is false because of reference comparision

const obj = {}

console.log(obj === obj);

const arr = [];

console.log(arr == arr)// true

console.log(arr == [])// false

