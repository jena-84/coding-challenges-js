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
  //search for given node value
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
  // preorder travelsal
  preorder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }
  //inorder Traversal
  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }
  // postorder traversal
  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }
}

let bst = new BinarySeachTree();
//console.log("is empty?", bst.isEmpty())
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(10));
console.log(bst.search(5));
console.log(bst.search(20));
console.log("preorder traversal");
console.log(bst.preorder(bst.root));
console.log("inorder traversal");
console.log(bst.inorder(bst.root));
console.log("postorder traversal");
console.log(bst.postorder(bst.root));
