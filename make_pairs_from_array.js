/* Question:
** Make a function that takes an array of numbers and returns an array of pairs
*/

// SOLUTION
function makePairs(arr) {
  var pairs = []
  for (var i = 0; i < arr.length; i += 2) {
    pairs.push([arr[i], arr[i + 1]])
  }
  return pairs
}

console.log(makePairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// => [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
