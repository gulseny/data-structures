var testMakeQueue = function(n, queue){
  var startTime = new Date();
  for (var i = 0; i < n; i++) {
    queue.enqueue(i);
  }
  for (var j = 0; j < n; j++) {
    queue.dequeue();
  }
  var endTime = new Date();
  console.log(endTime - startTime);
  return endTime - startTime;
};
//         func   func-sha  proto   pseudoclas
//     10     0
//    100     0
//   1000    29         23
//  10000  2551       2057   2046       2121
//  20000     x       9402   9388       9342
//  30000     x      30331  30724      30479