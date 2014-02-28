var makeLinkedList = function(){
  var list = {};
  list.head = null; //  a linkedListNode instance
  list.tail = null; //  a linkedListNode instance

  list.addToTail = function(value){
    var node = makeNode(value);
    if(!list.head){
      list.head = node;
      list.tail = node;
    }
    else{
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var removedHead = list.head.value;
    list.head = list.head.next;
    return removedHead;
  };

  list.contains = function(target, node){
    var currentNode = list.head;
    while(currentNode){
      if(currentNode.value === target){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};