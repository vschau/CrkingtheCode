// There are three types of edits that can be performed on strings: insert a character, remove a character,
// or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
//   pale,  ple  ->  true
//   pales, pale -> true
//   pale,  bale -> true
//   pale,  bae -> false
// Solution: divide into 3 cases: lenDiff>1, lenDiff=0 (replace), lenDiff=1 (insert/edit). Compare 2 strings letter by letter
// Runtime: O(n)
function oneAway(first, second) {
  let lenDiff = Math.abs(first.length - second.length);
  // if different in length, return false
  if (lenDiff > 1) return false;

  // if same length, check for replacement
  let foundDiff = false;
  if (lenDiff === 0) {
    for (let i = 0; i < first.length; i++) {
      if (first.charAt(i) != second.charAt(i)) {
        if (!foundDiff) foundDiff = true;
        else return false; // 2 different letters
      }
    }
    return true;
  }

  // lenDiff = 1 if it gets here.  Check for insert&remove
  // s1 is the shorter sting
  let s1 = first.length < second.length ? first : second;
  let s2 = first.length < second.length ? second : first;
  
  let index1 = index2 = 0;
  while (index2 < s2.length && index1 < s1.length) {
    if (s1.charAt(index1) !== s2.charAt(index2)) {
      // if index1!= index2, it's the second diff
      if (index1 !== index2) return false;
      index2++;
    }
    else {
      index1++;
      index2++;
    }
  }
  return true;
}

let s1Arr = [ 'a', '', 'pale', 'pal' , 'pale', 'pale', 'pale', 'pale', 'pale', 'pale', 'pale' ];
let s2Arr = [ '' , '',  'ale', 'pale', 'bale', 'pall', 'paae', 'xxle', 'paxx', 'pxxe', 'pxlex' ];
for (let i = 0; i < s1Arr.length; i++) {
  let a = s1Arr[i];
  let b = s2Arr[i];
  console.log(a, ' is at most 1 edit away from ', b, '?', oneAway(a, b));
}