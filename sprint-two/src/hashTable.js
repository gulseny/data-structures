var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var moveStorage = function(keyValue){
    if(keyValue){
      var newIndex = getIndexBelowMaxForKey(keyValue[0], newLimit);
      newStorage.set(newIndex, [keyValue[0],keyValue[1]]);
    }
  };
  if(this._count/(this._limit-1) > 0.75){
    this._limit *= 2; 
    var newLimit = this._limit ;
    var newStorage = makeLimitedArray(newLimit);
    this._storage.each(moveStorage);
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
  return removedValue;
};
