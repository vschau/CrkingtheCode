//  You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
// function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem.
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
// Output: 9 -> 1 -> 2. That is, 912.
// Solution: If reversed order is stored, iterate through both and add the (sum+carry)%10
// If forward order is stored, reverse the input link lists and add them???
let llModule = require('../Models/LinkedList');

function sumLists(l1, l2) {
  let cur1 = l1.head;
  let cur2 = l2.head;

  let sum = new llModule.LinkedList();
  let val = carry = 0;

  while (cur1 != null || cur2 != null) {
    val = carry;
    if (cur1 != null) {
      val += cur1.data;
      cur1 = cur1.next;
    }
    if (cur2 != null) {
      val += cur2.data;
      cur2 = cur2.next;
    }

    sum.addLast(val % 10);

    carry = val >= 10 ? 1 : 0;
  }

  if (carry > 0) sum.addLast(carry);

  return sum;
}

function sumListsAlt(l1, l2) {
  l1.reverse();
  l2.reverse();
  let cur1 = l1.head;
  let cur2 = l2.head;

  let sum = new llModule.LinkedList();
  let val = carry = 0;

  while (cur1 != null || cur2 != null) {
    val = carry;
    if (cur1 != null) {
      val += cur1.data;
      cur1 = cur1.next;
    }
    if (cur2 != null) {
      val += cur2.data;
      cur2 = cur2.next;
    }

    sum.addFirst(val % 10);

    carry = val >= 10 ? 1 : 0;
  }

  if (carry > 0) sum.addFirst(carry);

  return sum;
}

// If 2 linked lists are stored in reverse order
let l1 = new llModule.LinkedList();
l1.addFirst(9);
l1.addFirst(6);
l1.addFirst(1);
l1.addFirst(7);

let l2 = new llModule.LinkedList();
l2.addFirst(3);
l2.addFirst(9);
l2.addFirst(5);

console.log('Reverse order');
l1.print();
l2.print();
let sum = sumLists(l1, l2);
sum.print();


// If 2 linked lists are stored in forward order
l1 = new llModule.LinkedList();
l1.addLast(1);
l1.addLast(9);
l1.addLast(5);
l1.addLast(5);

l2 = new llModule.LinkedList();
l2.addLast(5);
l2.addLast(2);

console.log('\nForward order');

l1.print();
l2.print();

sum = sumListsAlt(l1,l2);
sum.print();
