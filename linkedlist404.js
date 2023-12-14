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
    //insert
    insertFirst(data){
        this.head = new Node(data,this.head);
        this.size++;
    }


    insertLast(data){
        let current = this.head;
        let node = new Node(data);
        if(this.size==0){
            current = node;
        }

        while(current.next){
            current = current.next;
        }
        current.next = node;
        this.size++;
    }

  
    insertAtIndex(index,data){
        let current = this.head;
        let previous;
        let node = new Node(data);
        if(index==0){
            current = node;
        }
        for(let i = 0;i<index;i++){
            previous = current;
            current = current.next;
        }
        previous.next = node;
        node.next = current;
        this.size++;
    }

    printData(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current=current.next;
        }
    }

    reverse(){
        let current = this.head;
        let next, previous;
        while(current){
            next = current.next;
            current.next = previous;
            previous = current; 
            current = next;
        }

    }

    getAt(index){
        let current = this.head;
        if(index<0||index>this.size){
            return;
        }
        for(let i = 0;i<index;i++){
            current = current.next;
        }
        console.log(current);

    }
    //[1,4,8,2]
    //[4,5,21,13]
    mergeTwo(l1,l2){
        if(l1.next==null) return l2;
        if(l2.next==null) return l1;

        if(l1.val>l2.val){
            l2.next = mergeTwo(l1,l2.next);
            return l2;
        }
        else{
            l1.next = mergeTwo(l1.next,l2);
            return l1;
        }
    }

    reverse(head){
        if(head==null||head.next==null){
            return head;
        }
        var p = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return p;

}

let ll = new LinkedList();

ll.insertFirst(1);
ll.insertLast(5);
ll.insertLast(4);
ll.insertFirst(8);
ll.insertAtIndex(3,21)
ll.getAt(2);

ll.printData();

