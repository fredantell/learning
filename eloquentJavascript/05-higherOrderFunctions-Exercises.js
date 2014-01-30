//Exercises
/*
Flattening
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.
*/
(function() {
  var arrays = [[1, 2, 3], [4, 5], [6]];
  arrays.reduce(function(a, b) {
    return a.concat(b);
  });
  // Your code here.
  // → [1, 2, 3, 4, 5, 6];
})();

////////////////
/*
 Mother-child age difference
 Using the example data set from this chapter, compute the average age difference between mothers and children. You can use the average function defined below.
 Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.
*/
(function() {
  function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }
  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });

// Your code here.
  //Steps:
  //  filter dataset for people whose mothers are also in the dataset (and for whom you can thus calculate an age diff)
  //  use map to transform dataset into an array of age differences
  //  call the given average function using the mapped array
  var setOfNames = ancestry.filter(function(person) {
    return typeof byName[person.mother] !== 'undefined'
  });
  var ageDifferences = setOfNames.map(function(person) {
    return person.born - byName[person.mother].born;
  });
  console.log(average(ageDifferences));
  // → 31.2
})();

////////////////
/*
 Historical life expectancy
 When we looked up all the people in our data set that lived more than ninety years, only the very latest generation in the data came out. Let us take a closer look at that phenomenon.
 Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by a hundred, and rounding it up, as in Math.ceil(person.died / 100).
*/
(function() {
  function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }

// Your code here.
  function peopleByCenturyOfDeath(collection, century) {
    return collection.filter(function(person) {
      century = parseInt(century, 10);
      var a = Math.ceil(person.died / 100);
      var b = century;
      return a === b;
    });
  }
  function lifeSpan(people) {
    return people.map(function(person) {
      return person.died - person.born;
    });
  }

  for (var i = 16; i <= 21; i++) {
    console.log(i + ": " + average(lifeSpan(peopleByCenturyOfDeath(ancestry, i))));
  }

  /* Bonus - abstract grouping into groupBy function that accepts a collection
   and a grouping function

   function groupBy(collection, testCase) {
   return collection.filter(function(item) {
   return testCase(item);
   });
   }
   console.log("Died in 1600s: ", groupBy(ancestry, function(person) {
   return Math.floor(person.died / 100) === 16;
   }));

   */
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
})();

////////////////
/*
 Every and then some

Arrays also come with the standard methods every and some, which are analogous to the && and || operators.
Both take a predicate function that, when called with an array element as argument, returns true or false. Just like && only returns a true value when the expressions on both sides are true, every only returns true when the predicate returned true for all elements of the array. Similarly, some returns true as soon as the predicate returned true for any of the elements. They do not process more elements than necessary—for example, if some finds that the predicate holds for the first element of the array, it will not look at the values after that.
Write two functions, every and some, that behave like these methods, except that they take the array as their first argument, rather than being a method.
 */

(function() {
  // Your code here.
  function some(array, testFn) {
    for (var i = 0; i < array.length; i++) {
      if (! testFn(array[i])) continue;
      return true;
    }
    return false;
  }

  function every(array, testFn) {
    for (var i = 0; i < array.length; i++) {
      if (testFn(array[i])) continue;
      return false;
    }
    return true;
  }

  console.log(every([NaN, NaN, NaN], isNaN));
// → true
  console.log(every([NaN, NaN, 4], isNaN));
// → false
  console.log(some([NaN, 3, 4], isNaN));
// → true
  console.log(some([2, 3, 4], isNaN));
// → false
})();