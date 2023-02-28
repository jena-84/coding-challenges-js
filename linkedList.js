
// Data Structute --- Linked List
//Create Node
class Node{
    constructor(value){
      this.value = value
      this.next= null
    }
  }
  //Create LinkedList
  class LinkedList{
    constructor(){
      this.head= null,
      this.size = 0
    }
  // adding methods
    isEmpty(){
      return this.size ===0
    }
    getSize(){
      return this.size
    }
    //Add new node to the begining of the list
    prepend(value){
      //create new node with giving value
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node
      }else {
        node.next = this.head
        this.head = node
      }
      this.size ++
    }
    //add new node to the end of linked
    append(value){
       //create new node with giving value
       const node = new Node(value);
       if(this.isEmpty()){
         this.head = node
       }else{
         let prev = this.head;
         while(prev.next){
           prev = prev.next
          }
           prev.next = node
       }
      this.size ++
    }
//Inset node on i sercain position (index)
insert(value,index){
    if(index < 0 || index > this.size){
      return
    }
    if(index === 0){
      this.prepend(value)
    }else{
      let node = new Node(value)
      let prev = this.head
      for(let i =0; i< index-1; i++){
        prev = prev.next
      }
        node.next = prev.next
        prev.next = node
        this.size ++
    }
  }

  // print all nodes
    print(){
      if(this.isEmpty()){
        console.log('List is empty')
      }else{
        let curr = this.head
        let values = '';
        while(curr){
          values += `${curr.value } `
          curr = curr.next
        }
        console.log(values)
      }
    }
  }
  
  // Create new LinkedList
  const list = new LinkedList
  console.log(list.isEmpty())
  console.log(list.getSize())
  //list.print()
  //list.append(16)
  //list.print()
  //list.append(3)
  //list.print()
  //list.append(17)
  //list.print()
  //console.log(prepend(16))

list.insert(10,0)
list.print()

list.insert(20,0)
list.print()

list.insert(30,1)
list.print()

list.insert(40,2)
 list.print()
