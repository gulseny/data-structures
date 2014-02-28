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
      var previousNode = list.tail;
      list.tail.next = node;
      list.tail = node;
      list.tail.previous = previousNode ;
    }
  };

  list.addToHead = function(value){
    var node = makeNode(value);
    if(!list.head){
      list.addToTail(value);
    }
    else{
      var formerHeadNode = list.head;
      node.next = list.head; // next-link
      list.head = node; // new head
      formerHeadNode.previous = list.head; // previous link
    }
  };

  list.removeHead = function(){
    var removedHead = list.head.value;
    list.head = list.head.next;
    list.head.previous = null;
    return removedHead;
  };

  list.removeTail = function(){
    var removedTail = list.tail.value;
    list.tail = list.tail.previous;
    list.tail.next = null;
    return removedTail;
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
  node.previous = null;

  return node;
};