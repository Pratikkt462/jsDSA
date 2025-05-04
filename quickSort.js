function quickSort(arr){
    n=arr.length;
    console.log(arr);
    
    if(n<2){
        return arr;
    }
    let piv=arr[n-1]
    let left=[];
    let right=[];
    for(let i=0;i<n-1;i++){
        if(arr[i]<piv){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),piv,...quickSort(right)]
}

console.log(quickSort([-3,8,-2,1,-1]));
