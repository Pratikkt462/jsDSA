function insertionSort(arr, n) {
    for (i = 0; i < n; i++) {
        let nit = arr[i]
        let j=i-1;
        while(j>=0 && arr[j]>nit){
            arr[j+1]=arr[j];
            j--;
            console.log(arr);
        }
        arr[j+1]=nit;
        console.log(arr)
    }
    return arr;
}
insertionSort([-3, 8, -2, 1], 4)

// console.log(insertionSort([-3, 8, -2, 1], 4))