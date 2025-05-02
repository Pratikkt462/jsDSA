function recFib(n){
    if(n<=0){
        return 0;
    }
    if(n==1){
        return 1
    }

    return recFib(n-1)+recFib(n-2) 
}
console.log(recFib(1));
console.log(recFib(7));
console.log(recFib(6));

