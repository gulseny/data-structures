var makeBinarySearchTree = function(value){
  var newBST = {};
  newBST.value = value;
  newBST.left = undefined;
  newBST.right = undefined;

  extend(newBST, makeBinarySearchTree.prototype);

  return newBST;
};

makeBinarySearchTree.prototype.insert = function(value){
  if(value && value !== this.value){
    var side = (value < this.value) ? 'left' : 'right';
    if(!this[side]){
      this[side] = makeBinarySearchTree(value);
    } else {
      this[side].insert(value);
    }  
  }
};

makeBinarySearchTree.prototype.contains = function(value){
  if(value === this.value){
    return true;
  }
  var side = (value < this.value) ? 'left' : 'right';
  return !!this[side] && this[side].contains(value);
};

makeBinarySearchTree.prototype.depthFirstLog = function(){};