/*
The sum of a range

The introduction of this book alluded to this program as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers, and returns the sum of these numbers. Run the above program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If not given, it moves by steps of one, corresponding to the old behavior. The call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values—so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

//Answer
function range(start, end, step) {
  var arr = [];
  step = Math.abs(step) || 1;

  if (start === end) {
    arr.push(start);
    return arr;
  }
  if (start < end) {
    while (start <= end) {
      arr.push(start);
      start += step;
    }
    return arr;
  }
  if (start > end) {
    while (start >= end) {
      arr.push(start);
      start -= step;
    }
    return arr;
  }
}
function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
//Test
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

///////////////////////////////////////////////////////////////
//Assignment:
/*
Reversing an array
Arrays have a method reverse, which will change the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace does what the reverse method does—it modifies the array given as argument in order to reverse its elements.
Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?
*/
//Answer
(function() {
  function reverseArray(arr) {
    var reversedArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }

  function reverseArrayInPlace(arr) {
    var temp;
    for (var i = 0; i < (arr.length / 2); i++) {
      temp = arr[i];
      arr[i] = arr[arr.length - (1 + i)];
      arr[arr.length - (1 + i)] = temp;
    }
    return arr;
  }

  //Tests
  var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var testArrayTwo = [1, 2, 3];
  console.log('reverseArray: ', reverseArray(testArray));
  console.log('reverseArray: ', reverseArray(testArrayTwo));
  console.log('reverseArrayInPlace: ', reverseArrayInPlace(testArray));
  console.log('reverseArrayInPlace: ', reverseArrayInPlace(testArrayTwo));
})();

///////////////////////////////////////////////////////////////
//Assignment:
/*
A list

Objects, by being generic blobs of values, can be used to build all sorts of data structures. An common data structure is the list (not to be confused with the array). A list is a set of objects, with the first object holding a reference (in a property) to the second, the second to the third, and so on.

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined above), they are both independant lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

Write a function arrayToList that builds up a data structure like the one above when given [1, 2, 3] as argument, and a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list, and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number, and returns the element at the given position in the list, or undefined when there is no such element.

If you hadn’t already, also write a recursive version of nth.
*/

//Answer
(function() {
  function arrayToList(arr, list) {
    var list = list || {};

    list.value = arr[0];

    if (arr.length === 1) {
      list.rest = null;
      return list;
    }
    list.rest = arrayToList(arr.slice(1), list.rest = {});
    return list;
  }

  function arrayToListNotRecursive(arr) {
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--) {
      list = {
        value: arr[i],
        rest: list
      };
    }
    return list;
  }

  function listToArray(list, arr) {
    arr = arr || [];

    arr.push(list.value);

    if (list.rest === null) {
      return arr;
    }
    return listToArray(list.rest, arr);
  }
  function listToArrayNotRecursive(list) {
    var arr = [];
    for (var node = list; node; node = node.rest) {
      arr.push(node.value);
    }
    return arr;
  }

  function prepend(element, list) {
    var newList = {};
    newList.value = element;
    newList.rest = list;
    return newList;
  }

  function nth(list, number) {
    if (number === 0) {
      return list.value;
    }
    if (list.rest === null) {
      return undefined;
    }
    return nth(list.rest, number - 1);
  }

  //Tests
  var testArray = [1, 2, 3];
  arrayToList(testArray);
  arrayToListNotRecursive(testArray);
  listToArray(arrayToList(testArray));
  listToArrayNotRecursive(arrayToListNotRecursive(testArray));
  nth(arrayToList(testArray), 2);
  nth(arrayToList(testArray), 20);
})();

///////////////////////////////////////////////////////////////
//Assignment:
/*Deep comparison
The ‘==’ operator compares objects by identity. Sometimes, you would prefer to compare the values of their actual properties.
Write a function deepEqual that takes two values, and returns true only if they are the same value, or objects with the same properties whose values are equal, when compared with a recursive call to deepEqual.
To find out whether to compare something by identity (use the ‘===’ operator for that) or by looking at its properties, you can test whether applying the typeof operator on it produces "object". But you have to take one silly exception into account, because (through a historical accident), typeof null also produces "object".
*/
//Answers
(function() {
  function deepEqual(val1, val2) {
    if (val1 === val2) {return true;}
    if (typeof val1 !== 'object' ||
        typeof val2 !== 'object' ||
        val1 === null ||
        val2 === null) {
      return false;
    }

    for (prop in val1) {
      if (val1.hasOwnProperty(prop)) {
        return deepEqual(val1[prop], val2[prop]);
      }
    }
    return false;
  }
})();

function deepEqual(val1, val2) {
  debugger;
  if (typeof val1 === 'object' &&
      typeof val2 === 'object' &&
      val1 !== null &&
      val2 !== null) {
    for (var prop in val1) {
      return deepEqual(val1[prop], val2[prop]);
    }
  }

  if (val1 === val2) {return true;}
  return false;
}
deepEqual(1, 1);
deepEqual(1, 2);
deepEqual('fred', 'fred');
deepEqual('fred', 'fredrik');
deepEqual({}, {});  //this is the edge case where this method fails
deepEqual({name: 'fred'}, {name: 'fred'});
