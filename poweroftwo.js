// function isPowerOfTwo(n){

//     if(n==0){
//         return 1
//     }
//     let ans=2;
//     for(i=2;i<=n;i++){
//         ans=ans*2;
//     }
//     return ans ;
// }
// console.log(powerOfTwo(2));
// console.log(powerOfTwo(3));
// console.log(powerOfTwo(4));



function isPowerOfTwo(n){

    if(n==1){
        return true
    }
    while(n>0){
        if(n%2==1){
            return false;
        }
        if(n==2){
           return true;
        }
        n=n/2;
    }    
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(12));


