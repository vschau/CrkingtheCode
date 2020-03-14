// Replace all spaces in a string with '%20' if given true length of a string.
// Input : "Mr John Smith", 13
// Output : Mr%20John%20Smith

// Input : "Mr John Smith   ", 13
// Output : Mr%20John%20Smith

// Solution: split string into char array.  Replace space chars with '%20' and join back to get string.
function URLify(s, len) {
  let arr = s.trim().split(''); //trim() returns a new string
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr[i] = '%20';
    }
  }
  return arr.join('');
}

let input = " Mr  John Smith   ";
let output = URLify(input);
console.log(output);