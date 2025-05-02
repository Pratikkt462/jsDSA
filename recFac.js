function recFac(n){
    if(n==2){
        return 2;
    }
    if(n==1){
        return 1
    }

    return recFac(n-1)*recFac(n-2) 
}
console.log(recFac(1));
console.log(recFac(7));
console.log(recFac(6));

