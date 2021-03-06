// Find kth to last element in the linked list
// Solution: use 2 pointers.  Move 1st pointer kth time.  Then move the two pointers together to the end.
// cur2 will be length-k from the list or k from the end
// Runtime: O(n)
let llModule = require('../Models/LinkedList');

llModule.LinkedList.prototype.kToLast = function(k) {
  let cur1 = cur2 = this.head;

  for (let i = 0; i < k; i++) {
    if (cur1 == null) return null; // k > linklist length
    cur1 = cur1.next;
  }

  while (cur1 != null) {
    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  return cur2.data;
}


let list = new llModule.LinkedList();

list.addFirst(1);
list.addFirst(2);
list.addFirst(3);
list.addFirst(4);
list.addFirst(5);
list.print();

let k = 4;

console.log(list.kToLast(k));