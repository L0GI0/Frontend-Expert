function debounce(callback, delay, immediate = false) {
  
  let debounceId;


  return function (...args) {

    const shouldCallImmediately = debounceId == null && immediate;

    clearTimeout(debounceId);

    if(shouldCallImmediately) {
      callback.apply(this, args)
    }
    
     debounceId = setTimeout(() => {
    
    if(!immediate) {
      callback.apply(this, args);
    }

     debounceId = null;
      
    }, delay);
  }
}

// Do not edit the line below.
exports.debounce = debounce;
