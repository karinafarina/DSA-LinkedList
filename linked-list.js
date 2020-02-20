class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.inserFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertBefore(newItem, beforeItem) {
    if (this.head === null) {
      this.inserFirst(newItem)
      return
    }
    let currNode = this.head
    let prvNode = this.head
    while (currNode !== null && currNode.val !== beforeItem) {
      prevNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      this.insertLast(newItem)
      return
    }
    const tempNode = new _Node(newItem, currNode)
    prevNode.next = tempNode
  }
  // Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
  insertAfter(newItem, afterItem) {
    let currNode = this
    while (currNode !== null && currNode.val !== afterItem) {
      currNode = currNode.next
    }
    currNode.next = new _Node(newItem, currNode.next)

  }
  find(item) {
    //Start at the head
    let currNode = this.head;
    //If the list is empty
    if (!this.head) {
      return null;
    }
    //Check for the item
    while (currNode.value !== item) {
      //Return null if it's the end of the list and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        //Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    //Found it
    return currNode
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //Start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  //if you delete the 1rst item, 
  //change head to indicate new 1rst item on list
  //otherwise, find the node before the node you are reoving and update its next pointer to skip over the removed node
}