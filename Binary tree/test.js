class Node{
    constructor(val){
        this.val = val;
        this.left = null;  
        this.right = null;
    }
}

//Print all values
const depthFirstValue = (root) => {
    if(root===null) return [];
    
    var leftValues = depthFirstValue(root.left);
    var rightValues = depthFirstValue(root.right);

    return [root, ...leftValues, ...rightValues]
}

const breadthFirstValue = (root) => {
    if(root===null) return []; 

    const values = [];
    const queue = [root];
    
    while(queue.length>0){
        current = queue.shift();
        values.push(current.val);
       

        if(current.left){
            queue.push(current.left);
        } 
        if(current.right){
            queue.push(current.right);
        }
    }
    console.log(values);
}

//ustawić minimum na root i potem porywnac left czy right jest mneijsze
const minimum = (root) => {
    if(root==null) return false;
    var stack = [root];
    var minimum = root.val;
    console.log(minimum);

    while(stack.length > 0){
        current = stack.pop();
        if(current.left){
            stack.push(current.left)
        if(current.left.val<minimum){
            minimum = current.left.val;
        }
    }
        if(current.right){
            stack.push(current.right)
        if(current.right.val<minimum){
            minimum = current.right.val;
        }
    }
}
    return minimum;
}

//Base case: When root note is null
//
const min = (root) => {
    if(root==null) return Infinity;
    
    var leftValue = min(root.left);
    var rightValue = min(root.right);
    
    return Math.min(root,leftValue,rightValue);
}

const sum = (root) => {
    if(root===null) return false;

    var sum = 0;
    const queue = [root];

    while(queue.length>0){
        current = queue.shift();
        sum += current.val;
        if(current.left){
            queue.push(current.left);
        } 
        if(current.right){
            queue.push(current.right);
        }
    }
    console.log(sum);
}

const sumRecursive = (root, sum = 0) => {
    if(root.left !== null && root.right !== null) 
    {
        sum += sumRecursive(root.left)
    };
    
    
}

const includes = (root,target) => {
    if(root===null) return true;
    if(target === root.val) return true;
    
    return includes(root.left,target) || includes(root.right,target);
}


const a = new Node(1);
const b = new Node(5);
const c = new Node(21);
const d = new Node(-2);
const e = new Node(1213);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
console.log(depthFirstValue(a));
breadthFirstValue(a);
console.log(includes(a,"c"));
sum(a);
sumRecursive(a)
console.log(minimum(a));