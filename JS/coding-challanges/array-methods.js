Array.prototype.myMap = function (callback) {
  // Write your code here.

  const newArray = [];

  const currentArray = this;
  
  console.log(`Array = ${currentArray}`);

  for(let i = 0; i < currentArray?.length; i++){
    console.log('adding to new array');
    newArray.push(callback(currentArray[i], i, currentArray))
  }

  return newArray;
};

Array.prototype.myFilter = function (callback) {
  const newArray = [];

  const currentArray = this;
  
  for(let i = 0; i < currentArray?.length; i++){
    const isNotFiltered = callback(currentArray[i], i, currentArray);

    if(isNotFiltered){
        newArray.push(currentArray[i])
    }
  }

  return newArray;
};

Array.prototype.myReduce = function (callback, initialValue) {
  
  const currentArray = this;

  if(currentArray?.length === 0) {
    return initialValue;
  }
  
  let accumulator = initialValue || currentArray?.[0];
  
  for(let i = initialValue ? 0 : 1; i < currentArray?.length; i++){
      accumulator = callback(accumulator, currentArray[i], i, currentArray);
  }

  return accumulator;
};


/* Sample Usage */

const array = [1, 2, 3];

const mappedArray = array.myMap((value, i, arr) => {
  return value + i + arr[i]
})

const filteredArray = array.myFilter((value, i, arr) => {
  return (value + i + arr[1]) > 5;
})

const reducedValue = array.myReduce((accumulator, value, i, arr) => {
  return accumulator + value + i + arr[1];
}, 3);

console.log(mappedArray);
console.log(filteredArray);
console.log(reducedValue);