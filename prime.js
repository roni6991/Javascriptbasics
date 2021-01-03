// var n=100;
// for(i=2;i<n-1;i++)
// {
//     if(n%i == 0){
//     console.log('number is not prime number');
//     break;
//     }
//     else
//     console.log('prime number');
//     break;
// }

function isprime(n){
    for(i=2;i<n;i++){
        if(n%i == 0)
        return 'Number is not a prime number';
    }
    return 'Number is prime number';
}

var result= isprime(17);
console.log(result);