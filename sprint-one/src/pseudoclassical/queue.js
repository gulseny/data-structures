var Queue = function() {
  this.storage = {};
  this.rank = 0;
};

Queue.prototype.enqueue = function(value){
    this.storage[this.rank++] = value;
  };

Queue.prototype.dequeue = function(){
    var key = Object.keys(this.storage)[0];
    var value = this.storage[key];
    delete this.storage[key];
    return value;
  };

Queue.prototype.size = function(){
    return Object.keys(this.storage).length;
  };



