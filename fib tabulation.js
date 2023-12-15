function fibTab(n){
    let table = new Map();
    table.set(0,0);
    table.set(1,1)
    for(let i = 2;i<=n;i++){
        table.set(i,(table.get(i-1) + table.get(i-2)));
    }
    return table.get(n);
}

console.log(fibTab(8));

//Make table to store fib