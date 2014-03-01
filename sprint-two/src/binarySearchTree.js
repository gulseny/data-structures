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

// depthFirstLog(): accepts a callback and executes it on every value contained in the tree
makeBinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);

  // we aim to call the callback function on the current subtree


  if(this.left){
    this.left.depthFirstLog(callback);
  }
  if(this.right){
    this.right.depthFirstLog(callback);
  }
};