
const fib = (n, memo={}) => {
    if(n in memo) return memo[n];
    if(n<=2) return 1;
    console.log(n)
    memo[n] = fib(n-1,memo) + fib(n-2,memo);
    return memo[n];
}



function factorial(x){
    if(x>0){
        return x * factorial(x-1);
    }
    return 1;
}

// 5 = 4 * 3 * 2 * 1

function fac(x){
    var sum = 1;
    while(x!=1){
        sum *= x;
        x--;
        console.log(x);
    }
    console.log(sum);
}

fac(7)
console.log(factorial(7))

function fact(x){
    return factor(x,1);
}

function factor(x, multiplier){
    if(x>0){
        return factor(x-1,x*multiplier);
    }
    return multiplier;
}

console.log(fact(6));
