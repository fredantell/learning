/*  Chapter 2 Exercises

function makeHashTriangle(hashesToMake) {
    var string = '#';    
    for (; string.length <= hashesToMake; string += '#') {
      console.log(string);
    }
}
makeHashTriangle(1);


function doesItFizz(num) {
    return num % 3 === 0 ? 'Fizz' : '';
}
function doesItBuzz(num) {
    return num % 5 === 0 ? 'Buzz' : '';
}
for (var i = 1; i <= 100; i++) {
    console.log(doesItFizz(i) + doesItBuzz(i) || i);
}


function makeChessBoard(size) {
    size = size || 8;
    var rowA = '#',
        rowB = ' ';
        
    //buildRowStrings();
    while (rowA.length <= size &&
           rowB.length <= size) {
        rowA += rowA[rowA.length - 1] === '#' ? ' ' : '#';
        rowB += rowB[rowB.length - 1] === '#' ? ' ' : '#';
    }
    
    //compose board by alternating string rows
    var boardString = '';
    for (var i = 0; i < size; i++) {
        boardString += i % 2 ? rowA + '\n' : rowB + '\n';
    }
    console.log(boardString);    
}

makeChessBoard();
*/

//add 5, add 5, add 5, over? go back and multiply by 3, over?  go back and multiply by 3

//Function for duplicating behavior of Math.min
function minimum(x, y) {
    //check to see if either x or y are NaN
    //by exploiting fact that only NaN === NaN returns false
    if ( !(Number(x) === Number(x) &&
        Number(y) === Number(y))) {
            return "One or more values were not numbers";
        }
    return x < y ? x : y;
}

//Recursive function for checking evenness
function recEven(num) {
    if (num < 0 ) return recEven(-num);
    if (num === 0) return "even";
    if (num === 1) return 'odd';
    return recEven(num - 2);
}

//Write function that takes a string and counts uppercase B's
//Then generalize that function to allow any character to be counted
//could do this recursively by chopping the string, searching the new substring and passing the new running    total along as well.  Return value would be running total
//could also create a for loop that compares index to the letter and augments a counter for each match..much faster
function countBs(str) {
    var occurrences = 0,
        i = 0,
        len = str.length;
    for (; i < len; i++) {
        occurrences += str.charAt(i) === 'B' ? 1 : 0;
    }
    return occurrences;    
}
function recCountChar(str, targChar, total) {
    total = total || 0;
    var substr = '';
    if (str.indexOf(targChar) === -1) return total;
    substr = str.slice(str.indexOf(targChar) + 1);
    return recCountBs(substr, targChar, total + 1);
}
function countChar(str, char) {
    var i = 0,
    len = str.length,
    counter = 0;
    for (; i < len;  i++) {
        counter += str.charAt(i) === char ? 1 : 0;
    }
    return counter;
}

//write a sum and range function

/*
var range = function(start, end, step) {
    var result = [];
    
    if (start <= end) {
        step = step || 1;
        if (step < 0) return "invalid step will result in infinite length array";
        for (; start <= end; start += step) {
            result.push(start);
        }
        return result;
    }
    if (end <= start) {
        step = step || -1;    
        if (step > 0) return "invalid step will result in infinite length array";
        for (; start >= end; start += step) {
            result.push(start);
        }
        return result;
    }
    
};

range(5,2,-1);

*/


//For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace does what the reverse method does—it modifies the array given as argument in order to reverse its elements.

var reverseArray = function(arr) {
    var newArr = [];
    
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    
    return newArr;
};

var reverseArrayInPlace = function(arr) {
    var indexCountUp = 0;
    var indexCountDn = arr.length - 1;
    
    while (indexCountUp < indexCountDn) {
        var temp = arr[indexCountUp];
        arr[indexCountUp] = arr[indexCountDn];
        arr[indexCountDn] = temp;
        indexCountUp++;
        indexCountDn--;
    }
    return arr;
};
reverseArray([1,2,3]);
reverseArrayInPlace([1,2,3]);

/*
// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };
// Write a function arrayToList that builds up a data structure like the one above when given [1, 2, 3] as argument, and a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list, and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number, and returns the element at the given position in the list, or undefined when there is no such element.

function arrayToList(arr, node) {
    node = node || {};
    node.value = arr[0];
    node.rest = {};
    
  if (arr.length === 1) {
    node.rest = null;
    return;
  } else {       
    arrayToList(arr.slice(1), node.rest);
    return node;
  }
}
function arrayToList(arr) {
    var obj = {};

    
    for (var i = 0; i < arr.length; i++) {
        obj.value = arr[i];
        var list = {};
        list.rest = obj;

    }
}

function listToArray(list, dataProp, linkProp, arr) {
    dataProp = dataProp || "value";
    linkProp = linkProp || "rest";
    arr = arr || [];
    
    if (list === null ||
        typeof list[linkProp] === "undefined") return;
    arr.push(list[dataProp]);
    listToArray(list[linkProp], dataProp, linkProp, arr);
    return arr;
}
function prepend(element, list) {
    var obj = {};
    obj.value = element;
    obj.rest = list;
    return obj;
}
function nth(list, number, linkProp, dataProp) {
    linkProp = linkProp || "rest";
    dataProp = dataProp || "value";
    
    if (number === 0) return list[dataProp];
    if (typeof list[linkProp] === "undefined") return;
    return nth(list[linkProp], number - 1, linkProp, dataProp);
}

The ‘==’ operator compares objects by identity. Sometimes, you would prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values, and returns true only if they are the same value, or objects with the same properties whose values are equal, when compared with a recursive call to deepEqual.

function deepEqual(a, b) {
    if (a === b) return true;

    //check for arrayNess then loop to compare
    if (Object.prototype.toString.call(a) ===
        Object.prototype.toString.call(b) &&
        Object.prototype.toString.call(a) ===
        "[object Array]"                  &&
        a.length === b.length) {
        for (var i = 0; i < a.length; i++) {
            a[i] === b[i] ? continue : return false;
        }
    }

    //check for objectness then for in hasownproperty to compare
    if (Object.prototype.toString.call(a) ===
        Object.prototype.toString.call(b) &&
        Object.prototype.toString.call(a) ===
        "[object Object]"                  &&) {
        JSON.stringify(a) === JSON.stringify(b) ? return true : return false;
    }
}
*/
function deepEqual(a,b) {
    if (a === b) return true;

    if (typeof a === typeof b &&
        typeof a === 'object' &&
               a !== null) {
        //Step 1 Do they have same # of properties?
        var ObjAProps = [];
        for (var propA in a) {
            ObjAProps.push(propA);
        }
        var ObjBProps = [];
        for (var propB in b) {
            ObjBProps.push(propB);
        }
        if (ObjAProps.length !== ObjBProps.length) return false;

        //Step 2 are those properties the same on each object?
        ObjAProps.sort();
        ObjBProps.sort();
        for (var i = 0; i < ObjAProps.length; i++) {
            if (ObjAProps[i] === ObjBProps[i]) continue;
            if (ObjAProps[i] !== ObjBProps[i]) return false;
        }
        
        //Step 3 are the values of those properties equal?
        //  Could do this within Step 2's for loop but splitting it out
        //  in hope that comparison will fail before it gets to costly Step 3
        for (var i = 0; i < ObjAProps.length; i++) {
            if (! deepEqual(a[ObjAProps[i]], b[ObjBProps[i]])) {
            return false;
            }
        }
    } //end if object
    return true;
}
deepEqual(1, 1);
deepEqual(1, 2);
deepEqual('fred', 'fred');
deepEqual('fred', 'fredrik');
deepEqual({}, {});
deepEqual({name: 'fred'}, {name: 'fred'});
