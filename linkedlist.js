class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }


insertFirst(data) {
    this.head = new Node(data,this.head);
    this.size++;
}

//Merging conflict

//Trying out branching

//Merging conflict

insertLast(data){
    let node = new Node(data);
   let current; 

   if(this.size == 0){
       this.head = node;
   }
   else{
       current = this.head;
       while(current && current.next!=null){
           current = current.next;
       }
       current.next = node;
   }
   this.size++;
}

insertAtIndex(index, data){
    if(index>this.size){
        return;
    }

    if(index == 0){
        this.head = new Node(data,this.head);
        return;
    }

    const node = new Node(data); 
    let previous;  

    let current = this.head;
    let count = 0; 

    while(count<index){
        previous = current;
        count++; 
        current = current.next;
    }

    node.next = current;
    previous.next = node;   
    this.size++;
}

getAt(index){
    if(index>this.size){
        return;
    }

    let current = this.head;
    let count = 0;

    if(index == 0){
        console.log(current);
    }
    else{
        while(count!=index){
            current = current.next;
            count++;
        }
        console.log("data",current.data);
        
    }
}

reverse(){
    let current = this.head;
    while(current){
        
    }
}


removeAt(index){
    if(index>this.size){
        return;
    }

    let current , previous;
    current = this.head;
    let count = 0;

    if(index==0){
        this.head = current.next;
    }
    else{
        while(count<index){
            previous = current;
            current = current.next;
            count++;
        }
        
        previous.next = current.next;
        
    }
}


printListData(){
    let current = this.head;

    while(current){
        console.log(current.data);
        current = current.next;
    }
}

}


let ll = new LinkedList();

ll.insertFirst(3);
ll.insertFirst(5);
ll.insertLast(43);
ll.insertAtIndex(3,31);
ll.getAt(2)
ll.removeAt(0)

ll.printListData()

