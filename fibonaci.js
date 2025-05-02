function fibonaci(n){
    let prev =0;
    let ans=1;
    if(n==0){
        return 0
    }
    for(i=2;i<n;i++){
        let temp=ans;
        ans=ans+prev;
        prev=temp;
    }
    return ans;
}
console.log(fibonaci(7));

