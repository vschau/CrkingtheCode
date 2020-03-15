// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).
// Solution: 
function compressString(s) {
  let arr = [];
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (i+1 < s.length && s.charAt(i) === s.charAt(i+1))
      count++;
    else {
      arr.push(s.charAt(i));
      arr.push(count);
      count = 1;
    }
  }
  return arr.length < s.length ? arr.join('') : s;
}

let testCases = [ '', 'a', 'aa', 'abfcd', 'aabbbcd', 'abcdd', 'abcddd', 'aabcccccaaa', 'aaabbb' ];
testCases.forEach(item => {
  console.log(item, ' compressed to: ', compressString(item));
});