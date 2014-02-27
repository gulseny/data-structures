var Stack = function() {
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.stackSize++] = value;
};

Stack.prototype.pop = function(){
  var value = this.storage[this.stackSize - 1];
  if(this.stackSize > 0){
    delete this.storage[this.stackSize - 1];
    this.stackSize--;
  }
  return value;
};

Stack.prototype.size = function(){
  return this.stackSize;
};