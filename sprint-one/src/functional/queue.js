var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var rank = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[rank++] = value;
  };

  instance.dequeue = function(){
    var key = Object.keys(storage)[0];
    var value = storage[key];
    delete storage[key];
    return value;
  };

  instance.size = function(){
    return Object.keys(storage).length;
  };

  return instance;
};
