function bubbleSort(arr,n){
    let i=0;
    while(i<n-1){
        if(arr[i]<arr[i+1]){
            i++;
        }
        else{
            let j=i;
            while(j<n-1){
            if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            j++;
            }
            else{
                j++;
            }
        }
        i=0;
        }
    }
    return arr;
}


console.log(bubbleSort([-3,8,-2,1],4))