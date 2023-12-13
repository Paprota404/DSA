
class BinarySearchTreeNode{
    constructor(data){

    }
}


insert(head,data){
    if(head==null){
        head = new Node();
        head.data = data;
        return head;
    }
    if(head.data>data){
        head.left =  insert(head.left,data);
    }
    else{
        head.right = insert(head.right,data);
    }
    return head;
}

printAllNodes(head){
    if(!head) return;
    if(head.left==null&&head.right==null){
        console.log(head.data);
        return;
    }
    if(head.left) head = printAllNodes(head.left);
    if(head.right) head = printAllNodes(head.right);
    
}

DepthFirst(head,search){
    if(head.value==search){
        return true;
    }
}