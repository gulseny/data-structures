var makeStack = function() {
  var instance = {};

  instance.storage = {};
  instance.stackSize = 0;
  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.stackSize++] = value;
};

stackMethods.pop = function(){
  var value = this.storage[this.stackSize - 1];
  if(this.stackSize > 0){
    delete this.storage[this.stackSize - 1];
    this.stackSize--;
  }
  return value;
};

stackMethods.size = function(){
  return this.stackSize;
};
