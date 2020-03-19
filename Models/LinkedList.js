class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    let n = new Node(data);
    n.next = this.head;
    this.head = n;
  }
  
  addLast(data) {
    let n = new Node(data);
    if (this.head == null) {
      this.head = n;
    } else {
      let cur = this.head;
      while (cur.next != null) {
        cur = cur.next;
      }

      cur.next = n;
    }
  }

  // Use 0-based index
  get(index) {
    if (index < 0) return null;

    let cur = this.head;
    for (let i=0; i<index; i++) {
      if (cur == null) return;
      cur = cur.next;
    }
    return cur.data;
  }

  // remove 1st occurrence of value
  remove(value) {
    if (this.head === null) return;

    if (this.head.data === value) this.removeFirst();

    let prev = this.head;
    let cur = this.head;
    while (cur !== null && cur.data !== value) {
      prev = cur;
      cur = cur.next;
    }
    if (cur !== null) prev.next = cur.next;
  }

  removeAt(index) {
    if (index < 0 || this.head === null) return;

    if (index === 0) this.removeFirst();
    else {
      let prev = this.head;
      let cur = this.head;
      let i = 0;
      while (cur !== null && i<index) {
        i++;
        prev = cur;
        cur = cur.next;
      }
      if (cur != null) prev.next = cur.next;
    }
  };

  removeFirst() {
    if (this.head !== null) this.head = this.head.next;
  }

  removeLast() {
    if (this.head === null) return;
    if (this.head.next === null) this.removeFirst(); // only 1 item

    let secondToLast = this.head;
    while (secondToLast.next.next !== null) {
      secondToLast = secondToLast.next;
    }
    secondToLast.next = null;
  }

  reverse() {
    let cur = this.head;
    this.head = null;

    while (cur != null) {
      this.addFirst(cur.data);
      cur = cur.next;
    }
  }

  length() {
    let cur = this.head;
    let len = 0;
    while (cur != null) {
      len++;
      cur = cur.next;
    }
    return len;
  }

  print() {
    let arr = [];
    let cur = this.head;
    while (cur != null) {
      arr.push(cur.data);
      cur = cur.next;
    }
    console.log(arr.join('->'));
  }
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
