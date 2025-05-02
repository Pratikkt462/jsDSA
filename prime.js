function prime(n){
    if(n==1 || n==2){
        return true;
    }
    for(i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
console.log(prime(18));
console.log(prime(2));
console.log(prime(3));
console.log(prime(4));
console.log(prime(5));

