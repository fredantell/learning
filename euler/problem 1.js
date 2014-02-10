(function() {
var createArrayOfMultiples = function(inc, start, end) {
  var array = [];
  for (var i = start; i < end; i += inc) {
    array.push(i);
  }
  return array;
};
var sumArray = function(array) {
  return array.reduce(function(pv, cv, ix, ar) {
    return pv + cv;
  });
};

var arr3 = createArrayOfMultiples(3,0,1000);
var arr5 = createArrayOfMultiples(5,0,1000);
var arr15 = createArrayOfMultiples(15,0,1000);
var sum3 = sumArray(arr3);
var sum5 = sumArray(arr5);
var sum15 = sumArray(arr15);
console.log(sum3+sum5-sum15);
})();

(def all(range 1 1001)