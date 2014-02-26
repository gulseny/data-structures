
var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.rank = 0;

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
    this.storage[this.rank++] = value;
  };

queueMethods.dequeue = function(){
    var key = Object.keys(this.storage)[0];
    var value = this.storage[key];
    delete this.storage[key];
    return value;
  };

queueMethods.size = function(){
    return Object.keys(this.storage).length;
  };