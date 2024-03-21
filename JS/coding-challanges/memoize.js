function memoize(callback, resolver) {
    // Write your code here.
    const cachedData = new Map();
  
    function getCacheKey (args) {
      
      const key = resolver != null ? resolver(...args) : JSON.stringify(args);
    }
    
    function memoized (...args) {
  
      
      const cachedKey = getCacheKey(args);
  
      if(cachedData.has(cachedKey))
        return cachedData.get(cachedKey);
    
  
      const callbackResults = callback(...args);
  
      cachedData.set(cachedKey, callbackResults);
  
      return callbackResults;
    }
    
    memoized.clear = function() {
      cachedData.clear();
    }
    
    memoized.delete = function(...args) {
      cachedData.delete(getCacheKey(args))
    }
  
    memoized.has = function(...args) {
      return cachedData.has(getCacheKey(args))
    }

    return memoized;
  }