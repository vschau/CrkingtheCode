// Check if a string is a permutation of a palindrom
// A palindrome is a word, phrase, or sequence that reads the same backward as forward (ignoring space). A permutation is an arrangement of letters.
// Input: 'Tact Coa'
// Output: true.  Permutations; 'taco cat', 'atco cta'
// Assume: not case sensitive
// Solution: build a hash table with (key, value) = (letter, count).  Is a palindrome permutation if hash has at most 1 odd
// Runtime: O(n)
// Optimization: check odds as we go along and return right away
// Alt solution:
//   - use a single integer and set the bits instead of a hash table and check if it's 0 or there's a single bit 1 in the integer
//   - to check single 1, either shift the bits or use bit manipulation
//     00010000 - 1  =  00001111
//     00010000  &  00001111 = 0
function isPalindromePermutation(s) {
  let hash = {};
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    if (c !== ' ')
      hash[c] = hash[c] ? hash[c] + 1 : 1;
  }

  // check for # of odds
  let foundOdd = false;

  let keys = Object.keys(hash);
  for (key of keys) {
    if (hash[key] % 2 === 1) {
      if (!foundOdd)
        foundOdd = true;
      else return false;
    }
  }

  return true;
}

let testCases = [ 'a', 'ta', 'taa', 'Tact Coa', '', '1#1' ];
testCases.forEach(item => {
  console.log(item, ' is palindrome permutation? ', isPalindromePermutation(item));
});
