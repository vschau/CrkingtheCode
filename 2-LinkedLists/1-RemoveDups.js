// Remove duplicates from an unsorted linked list
// Solution: Use a hash table to keep track of the values.
// Runtime: O(n)
// If not using a buffer, use 2 pointers, one to iterate through the list, one to check the rest of the nodes for dups. O(n^2)

let llModule = require('../Models/LinkedList');

llModule.LinkedList.prototype.removeDups = function() {
  let hash = {};
  let cur = prev = this.head;

  while (cur != null) {
    if (hash[cur.data]) {
      prev.next = cur.next;
    } else {
      hash[cur.data] = true;
      prev = cur;
    }
    cur = cur.next;
  }
}


let list = new llModule.LinkedList();

list.addFirst(1);
list.addFirst(2);
list.addFirst(2);
list.addFirst(1);
list.addFirst(0);
list.addFirst(1);
list.addFirst(5);
list.addFirst(5);
list.print();

list.removeDups();
list.print();
