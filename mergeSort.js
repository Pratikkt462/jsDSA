function mergeSort(arr){
    if (arr.length<2){
        return arr;
    }
    const mid=Math.floor(arr.length/2);
    const leftArr=arr.slice(0,mid);
    const rightArr=arr.slice(mid)
    return merge(mergeSort(leftArr),(mergeSort(rightArr)))
}
function merge(leftArr,rightArr){
    const sortArr=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortArr.push(leftArr.shift())
        }
        else{
            sortArr.push(rightArr.shift())

        }
        console.log([...sortArr, ...leftArr,...rightArr])
    return [...sortArr, ...leftArr,...rightArr]
    }
}
console.log(mergeSort([1,5,-3,4,7,-9]));
 