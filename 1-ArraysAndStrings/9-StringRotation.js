// Check if s2 is a rotation of s1
// Example: "waterbottle" is a rotation of "erbottlewat"

function isStringRotation(s1, s2) {
  if (s1.length !== s2.length) return false;

  let s = s1.concat(s1);
  return s.includes(s2);
}

let s1Arr = [ 'abc', 'aa', '', 'abcd', 'abcd', 'waterbottle'];
let s2Arr = [ 'cab', 'aa', '', 'bcda', 'bcdf', 'erbottlewat'];
for (let i = 0; i < s1Arr.length; i++) {
  let a = s1Arr[i];
  let b = s2Arr[i];
  console.log(b, ' is string rotation of ', a, '?', isStringRotation(a, b));
}
