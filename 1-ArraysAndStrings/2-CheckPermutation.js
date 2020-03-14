// Check if one string is a permutation another
// What is a permutation? A permutation is an anagram except that an anagram should make sense in English
// Solution: assume case sensitive.  Sort and compare the 2 strings.  Can optimize by checking for length first.
function checkPermutation(s1, s2) {
  if (s1.length != s2.length) return false;

  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');

  return s1 === s2;
}

let s1Arr = [ 'abc', 'a', '', 'a', 'aa', 'abcd', '123', 'a a' ];
let s2Arr = [ 'cba', 'a', '',  '', 'ab', 'abce', '321', 'aa' ];
for (let i = 0; i < s1Arr.length; i++) {
  let a = s1Arr[i];
  let b = s2Arr[i];
  console.log(a, ' is permutation of ', b, '?', checkPermutation(a, b));
}