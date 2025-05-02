function factorial(n){
    if(n==0){
        return 0;
    }
    let ans=1;

    for(i=1;i<=n;i++){
        ans=ans*i;
    }

    return ans;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
