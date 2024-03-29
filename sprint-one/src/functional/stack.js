var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  instance.push = function(value){
    storage[size++] = value;
  };

  instance.pop = function(){
    var value = storage[size - 1];
    if(size > 0){
      delete storage[size - 1];
      size--;
    }
    return value;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};