const LinkedList = require('./index')

function main() {
  //Create a new instance of the linked list class
  let SLL = new LinkedList();
  //add items to SLL
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.find('Husker');
  SLL.remove('Husker');

  return SLL;
}
console.log(main());

main();