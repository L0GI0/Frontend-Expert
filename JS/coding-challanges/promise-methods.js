Promise.myRace = function (promises) {
    // Write your code here.
      return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
          promise.then((value) => resolve(value))
          .catch((error) => reject(error))
        })
      })
  };
  
  Promise.myAny = function (promises) {
  
      let rejectedCount = 0
    
      return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
          promise.then((value) => resolve(value))
          .catch((error) => {
            rejectedCount++;
            if(rejectedCount === promises.length){
              reject('all promises rejected');
            }
          })
        })
      })
    // Write your code here.
  };
  
  Promise.myAll = function (promises) {
    // Write your code here.
    return new Promise((resolve, reject) => {
      const results = [];
      let resolveCount = 0;
  
      promises.forEach((promise, i) => {
        promise
          .then(value => {
            results[i] = value;
            resolveCount++;
            if(resolveCount === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      })
    })
  };
  
  Promise.myAllSettled = function (promises) {
    
    // Write your code here.
  
    return new Promise(resolve => {
      const results = [];
  
      let settledCount = 0;
  
      promises.forEach((promise, i) => {
        promise.
          then(value => {
            results[i] = {status: 'fulfilled', value};
          })
          .catch(error => {
            results[i] = {status: 'rejected', error};
          })
          .finally(() => {
            settledCount++;
            if(settledCount === promises.length)
              resolve(results);
          })
      })
    })  
  };
  
async function runPromises () {
    const val = await Promise.myRace([
        new Promise(() => {}),
        new Promise(res => setTimeout(() => res(0), 1000)),
        new Promise((res, rej) => setTimeout(() => rej(5), 500)),
        Promise.resolve(10),
      ]);
  
      const val2 = await Promise.myAny([
          new Promise(() => {}),
          new Promise(res => setTimeout(() => res(0), 1000)),
          new Promise((res, rej) => setTimeout(() => rej(5), 500)),
          Promise.resolve(10),
        ]);
  
        const val3 = await Promise.myAny([
          Promise.resolve(0),
          Promise.resolve(5),
          Promise.resolve(10),
        ]);
  
        const val4 = await Promise.myAll([
          Promise.resolve(0),
          Promise.resolve(5),
          Promise.resolve(10),
        ]);
  
        const val5 = await Promise.myAllSettled([
          Promise.resolve(0),
          Promise.resolve(5),
          Promise.resolve(10),
        ]);

        console.log(`Val1 myRace = ${val1}`);
        console.log(`Val2 myAny = ${val2}`);
        console.log(`Val3 myAny = ${val3}`);
        console.log(`Val4 myAll = ${val4}`);
        console.log(`Val5 myAllSettled = ${val5}`);
}


runPromises();