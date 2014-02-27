var makeLinkedList = function(){
  var list = {};
  list.head = null; //  a linkedListNode instance
  list.tail = null; //  a linkedListNode instance

  list.addToTail = function(value){
    // Takes a value and adds it to the end of the list
    var node = makeNode(value);
    if(!list.head){ // test if list.head is null
      list.head = node;
      list.tail = node;
    }
    else{ // UPDATE
      list.tail.next = node; // 1. the 'next' of current tail
      list.tail = node;      // 2. the current tail
    }
  };

  list.removeHead = function(){
    var removedHead = list.head.value;
    list.head = list.head.next;
    return removedHead;
  };

  list.contains = function(target, node){
    // Returns boolean reflecting whether or not the passed-in value is in the linked list
    var doesContain = false;
    if(someTest){ 
      // go through the list
      // for / while
      doesContain = true;
    }
    return doesContain;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};