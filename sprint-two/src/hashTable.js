var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.updateSize = function(){
  var newLimit = this._limit * ((this._count/this._limit > 0.5) ? 2 : 0.5);
  this._limit = newLimit;
  var newStorage = makeLimitedArray(newLimit);
  this._storage.each(function(keyValue){
    if(keyValue){
      var newIndex = getIndexBelowMaxForKey(keyValue[0], newLimit);
      newStorage.set(newIndex, [keyValue[0],keyValue[1]]);
    }
  });
  this._storage = newStorage;
};

HashTable.prototype.insert = function(k, v){
  if(this._count/this._limit >= 0.75){
    this.updateSize();
  } else {
    var i = getIndexBelowMaxForKey(k, this._limit);
    this._storage.set(i, [k,v]);
    this._count++;
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return (this._storage.get(i))?this._storage.get(i)[1]:null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var removedValue = this._storage.get(i);
  this._storage.set(i, null);
  this._count--;
  if(this._count/this._limit < 0.25 && (2*this._count/this._limit < 0.25)){
    this.updateSize();
  }
  return removedValue;
};
