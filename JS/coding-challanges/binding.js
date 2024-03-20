Function.prototype.myCall = function (thisContext, ...args) {
  // Write your code here.

  const symbolId = Symbol('context');
  
  thisContext[symbolId] = this;

  const returnedValue = thisContext[symbolId](...args);

  delete thisContext[symbolId];
  
  return returnedValue;
};

Function.prototype.myApply = function (thisContext, args = []) {
  const symbolId = Symbol('context');
  
  thisContext[symbolId] = this;

  const returnedValue = thisContext[symbolId](...args);

  delete thisContext[symbolId];
  
  return returnedValue;
};

Function.prototype.myBind = function (thisContext, ...args) {
  // Write your code here.

  return (...optionalArgs) => {
  
  const symbolId = Symbol('context');
  thisContext[symbolId] = this;
  const returnedValue = thisContext[symbolId](...args, ...optionalArgs);

  delete thisContext[symbolId];
  
  return returnedValue;
  }
  
};
