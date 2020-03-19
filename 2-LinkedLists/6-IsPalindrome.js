// Check if a linked list is palindrome
// A palindrome is a word, phrase, or sequence that reads the same backward as forward (ignoring space)
// 0 -> 1 -> 2 -> 1 -> 0
// Solution: We'll handle both char and int lists.  Create a new list in reverse order and compare them.
let llModule = require('../Models/LinkedList');

function isPalindrome(list) {
  let reversedList = new llModule.LinkedList();
  let cur1 = list.head;
  while (cur1 !== null) {
    if (cur1.data !== ' ') reversedList.addFirst(cur1.data);
    cur1 = cur1.next;
  }

  cur1 = list.head;
  let cur2 = reversedList.head;

  // reverse list is always shorter because we don't add space to it
  while (cur2 !== null) {
    if (cur1.data !== ' ' && cur1.data !== cur2.data) return false;
    if (cur1.data !== ' ') {
      cur2 = cur2.next;
    }
    cur1 = cur1.next;
  }
  return true;
}

list = new llModule.LinkedList();
// list.addLast(0);
// list.addLast(1);
// list.addLast(2);
// list.addLast(1);
// list.addLast(0);
// list.addLast(3);

list.addLast('a');
list.addLast('b');
list.addLast('c');
// list.addLast('d');
list.addLast('b');
list.addLast(' ');
list.addLast('a');

list.print();
let result = isPalindrome(list);
console.log('is palindrome?', result);