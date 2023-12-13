//Funkcja ma zwrócic wartość na ktoryms miejscu ciagu fibonaciego

function fib(index){
    var liczby = [0,1]
    var liczba;
    if(index==0){
        console.log(0);
    }
    else if(index==1){
        console.log(1);
    }

    for(let i=2;i<=index;i++){
        liczba = liczby[i-1] + liczby[i-2];
        
        liczby.push(liczba);
    }
   console.log(liczba)
}

fib(9);

function fibRec(index){
    if(index<=1) return index;

    return fibRec(index-1) + fibRec(index-2);

}

console.log(fibRec(7));




function string(string){
    if(string==""){
        return "";
    }
    return string - string[-1];
}

console.log(string("dsa"));

function pal(palindrome){
    if(palindrome.length==1||palindrome.length==0){
        return true;
    }

    if(palindrome[0]==palindrome[palindrome.length-1]){
        return pal(palindrome.substring(1,palindrome.length-1));
    }
    return false;
}


console.log(pal("kayakdadaw"))

function sumOfNums(nums,sum){
    if(nums==0){
        return sum;
    }
    sum += nums;
    return sumOfNums((nums-1),sum);
}

console.log(sumOfNums(4,0));

function BinarySearch(array,value){
        
        let start = 0;
        let end = array.length - 1;

        while(start<=end){
         
            let mid = Math.floor((start + end)/2);

        if(array[mid]==value){
            return mid;
        }
        else if(value<array[mid]){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    return -1;
}

console.log(BinarySearch([0,1,4,8,10,14,15],14));


let arr = [1,5,8,12,14,17];
function findMe(target,start,end){
    if(start>end){
        return "not found";
    }

    let middle = Math.floor((start+end)/2);

    if(arr[middle]===target){
        return `found at ${middle}`;
    }
    else if(arr[middle]>target){
        return findMe(target,start,middle-1);
    }
    else{
        return findMe(target,middle+1,end)
    }
}

console.log(findMe(5,0,10));

let array = [43,0,3,7,1,4,543,13,-3]

function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left,right);

}


function merge(arr1,arr2){
    let i = 0;
    let j = 0;
    let results = [];
    console.log(arr1)

    while(i<arr1.length && j<arr2.length){
        console.log(arr1)
        if(arr1[i]>arr2[j]){
            results.push(arr2[j]);
            j++;
        }
        else{
            results.push(arr1[i]);
            i++;
        }
    }

    while(i<arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results;
}

console.log(mergeSort(array))