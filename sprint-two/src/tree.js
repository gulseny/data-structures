var makeTree = function(value){
  return {
    value: value,
    children: undefined,

    addChild: function(value){
      var aSubTree = makeTree(value);
      if(this.children){
        this.children.push(aSubTree);
      } else {
        this.children = [aSubTree];
      }
    },

    contains: function(target){
      var isFound = this.value === target;
      for (var i = 0; !isFound && this.children && i < this.children.length; i++) {
        isFound = this.children[i].contains(target);
      }
      return isFound;
    }
  };

};