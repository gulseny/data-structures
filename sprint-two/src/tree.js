var makeTree = function(value){
  var tree = {
    value: value,
    children: undefined
  };

  extend(tree, treeMethods);
  return tree;
};

var extend = function(aTree, treeMethods){
  for(var method in treeMethods){
    aTree[method] = treeMethods[method];
  }
  return aTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var aSubTree = makeTree(value);
  if(this.children){
    this.children.push(aSubTree);
  } else {
    this.children = [aSubTree];
  }
};

treeMethods.contains = function(target){
  var isFound = this.value === target;
  for (var i = 0; !isFound && this.children && i < this.children.length; i++) {
    isFound = this.children[i].contains(target);
  }
  return isFound;
};
