// Given access to a middle node of a linked list, delete it.
// Solution: copy data of the next node to the current node and delete the next node
let llModule = require('../Models/LinkedList');

function deleteMiddleNode(n) {
  if (n == null || n.next == null) return false; // failed deleting

  n.data = n.next.data;
  n.next = n.next.next;
  return true;
}

let list = new llModule.LinkedList();

list.addFirst(4);
list.addFirst(3);
list.addFirst(2);
list.addFirst(1);
list.print();

console.log('Delete node:', list.head.next.next.data);
deleteMiddleNode(list.head.next.next);
list.print();

console.log('Delete node:', list.head.next.data);
deleteMiddleNode(list.head.next);
list.print();
