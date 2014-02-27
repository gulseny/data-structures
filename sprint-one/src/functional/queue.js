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



//test makeQueue

var testMakeQueue = function(n, callback){
  var queue = callback();
  var startTime = new Date();
  for (var i = 0; i < n; i++) {
    queue.enqueue(i);
  }
  for (var j = 0; j < n; j++) {
    queue.dequeue();
  }
  var endTime = new Date();
  console.log(endTime - startTime);
  return endTime - startTime;
};

testMakeQueue(1000, makeQueue);