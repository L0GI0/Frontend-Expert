function flatten(value) {
  // Write your code here.
  if(typeof value !== 'object' || value === null){
    return value;
  }

  if(Array.isArray(value)){
    return flattenArray(value)
  }

  return flattenObject(value);

}

function flattenArray(array) {
    return array.reduce((acc, curr) => acc.concat(flatten(curr)), []);
}

function flattenObject(object) {

  const flattenedObj = {};
  
  for(const [key, value] of Object.entries(object)) {
    const valueIsObject =
      typeof value === 'object' && value !== null && !Array.isArray(value);
    const flattenedValue = flatten(value);

    if(valueIsObject) {
      Object.assign(flattenedObj, flattenedValue)
    } else {
      flattenedObj[key] = flattenedValue;
    }
  }

  return flattenedObj;
}
  
  // Do not edit the line below.
const flattenValue1 = [1, 2, [3, 4, [5, 6]]];
const flattenValue2 = [ 1, 2, 3, [ [] ], 4, 5 ]
const flattenValue3 = [1, 2, [3, 4, [5, 6, []], 7, 8]]
const flattenValue4 = [ 1, 2, [ 3, 4 ] ];

const flattenValue5 = {
  a: 1,
  b: {c: 2, d: 3},
};

console.log(`Flattened = ${flatten(flattenValue1)}`);

console.log(`Flattened 2 = ${flatten(flattenValue2)}`);
console.log(`Flatten 3 = ${flatten(flattenValue3)}`);
console.log(`Flatten 4 = ${flatten(flattenValue4)}`);

console.log(`Flatten Value 5 = ${JSON.stringify(flattenValue5)}`);

  