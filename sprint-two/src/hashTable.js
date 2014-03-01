var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};

var moveStorage = function(storage){
  if(storage.keyValue){
    var newIndex = getIndexBelowMaxForKey(storage.keyValue[0], storage.limit);
    storage.storage.set(newIndex, [storage.keyValue[0],storage.keyValue[1]]);
  }
};

HashTable.prototype.insert = function(k, v){
  if(this._count/this._limit >= 0.75){
    this._limit *= 2;
    var newLimit = this._limit ;
    var newStorage = makeLimitedArray(newLimit);
    this._storage.each(function(keyValue){
     moveStorage({keyValue: keyValue, limit: newLimit, storage: newStorage});
    });
    this._storage = newStorage;
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
    this._limit /= 2;
    var newLimit = this._limit ;
    var newStorage = makeLimitedArray(newLimit);
    this._storage.each(function(keyValue){
     moveStorage({keyValue: keyValue, limit: newLimit, storage: newStorage});
    });
    this._storage = newStorage;
  }
  return removedValue;
};
