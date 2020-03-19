// partition a linked list around a value x, such that all nodes less than x come
// before all nodes greater than or equal to x. If x is contained within the list the values of x only need
// to be after the elements less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.
// Input:  3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5]
// Output:  3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
// Solution: create a new linked list using the existing head.  Iterate through the given linked list.  If value is less than the partition, add at the head, else add at the tail.
// If needing to keep the order of the original, use 2 linked list: a lesser and a greater and join them at the end.

let llModule = require('../Models/LinkedList');

function partition(list, x) {
  let newList = new llModule.LinkedList();

  let cur = list.head;
  while (cur != null) {
    if (cur.data < x)
      newList.addFirst(cur.data);
    else newList.addLast(cur.data);

    cur = cur.next;
  }
  return newList;
}

// use 2 linked list
function partitionAlt(list, x) {
  let small = new llModule.LinkedList();
  let large = new llModule.LinkedList();

  let cur = list.head;

  while (cur != null) {
    if (cur.data < x)
      small.addLast(cur.data);
    else large.addLast(cur.data);

    cur = cur.next;
  }

  // Merge
  let cur2 = small.head;
  while (cur2.next != null) cur2 = cur2.next;

  cur2.next = large.head;

  return small;
}


let list = new llModule.LinkedList();

list.addLast(3);
list.addLast(5);
list.addLast(8);
list.addLast(5);
list.addLast(10);
list.addLast(2);
list.addLast(1);
list.print();
let partitionedList = partition(list, 5);
console.log('Using 1 list -> not preserving order');
partitionedList.print();

let partitionedListAlt = partitionAlt(list, 5);
console.log('Using 2 lists -> preserving order');
partitionedListAlt.print();
