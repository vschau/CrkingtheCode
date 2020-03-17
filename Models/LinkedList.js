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
