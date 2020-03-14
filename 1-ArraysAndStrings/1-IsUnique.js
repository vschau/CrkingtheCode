// Determine if a string has all unique characters.
// What if you can't use additional data structure.

// Solution: Use an obj as a hash table to store unique characters
// Runtime: O(n).  Space: O(1)
function isUnique(s) {
  let hashTable = {};
  let arr = s.split('');

  for (let i = 0; i < arr.length; i++) {
    if (hashTable.hasOwnProperty(arr[i]))
      return false;
    else hashTable[arr[i]] = true;
  }

  return true;
}

// If not allowed to use additional data structure
// Solution: sort array and check neighboring characters
// Time: O(nlogn).  Space: O(n) if merge sort
function isUniqueAlt(s){
  let arr = s.split('');

  if (arr.length == 1) return true;

  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i-1]) return false;
  }
  return true;
}

let testCases = [ '', 'a', 'aa', 'abfcd', 'aabcd', 'abbcd', 'abcddd' ];
testCases.forEach(item => {
  console.log(item, ' is unique? ', isUnique(item));
});

testCases.forEach(item => {
  console.log(item, ' is unique? ', isUniqueAlt(item));
});
