
/*
 Two Solutions to computing fibonacci numbers.
 One uses recursion and the other uses a loop
 Both necessarily make use of closure.
 */

var fibv1 = (function() {
  var memo = [0,1];

  var f = function(index) {
    if (typeof memo[index] === 'number') {
      return memo[index];
    }
    return memo[index] = f(index - 1) + f(index - 2);
  };
  return f;
})();


var fibv2 = (function () {
  var memo = [0,1];
  var obj = {};

  obj.compFib = function(index) {
    while (typeof memo[index] === 'undefined') {
      memo.push(memo[memo.length-2] + memo[memo.length-1]);
    }
    return memo[index];
  };
  obj.getMemo = function() {
    return memo;
  };
  return obj;
})();

fibv1(10); //55
fibv2.compFib(10); //55
fibv2.getMemo(); //produce memoized list of results