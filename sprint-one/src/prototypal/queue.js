var makeQueue = function(){
  var instance = Object.create(queueMethods);

  instance.storage = {};
  instance.rank = 0;

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