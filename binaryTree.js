class Node {
  constructor(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }
}
class BinarySeachTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    //check the left sub-tree
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        // call recursive
        this.insertNode(root.left, newNode);
      }
    } else {
      //check the right sub-tree
      if (root.right === null) {
        root.right = newNode;
      } else {
        // call recusive
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else {
        if (value < root.value) {
          return this.search(root.left, value);
        } else {
          return this.search(root.right, value);
        }
      }
    }
  }
}

let bst = new BinarySeachTree();
console.log("is empty?", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.search(10));
console.log(bst.search(5));
console.log(bst.search(20));
