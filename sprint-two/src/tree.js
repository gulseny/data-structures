var makeTree = function(value){
  var tree = {
    value: value,
    children: undefined,
    parent: undefined
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
  aSubTree.parent = this;
  if(this.children){
    this.children.push(aSubTree);
  } else {
    this.children = [aSubTree];
  }
};

treeMethods.removeFromParent = function(aChild){
  var parent = aChild.parent;
  var childIndex = parent.children.indexOf(aChild);
  parent.children.splice(childIndex,1);
  aChild.parent = undefined;
};

treeMethods.contains = function(target){
  var isFound = this.value === target;
  for (var i = 0; !isFound && this.children && i < this.children.length; i++) {
    isFound = this.children[i].contains(target);
  }
  return isFound;
};
