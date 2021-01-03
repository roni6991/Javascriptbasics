// var fib =[0,1]
// // fib[n]=fib[n-1]+[n-2]
// for(i=10;i<=10; i--)
// {
//     fib[i]=fib[i-1]+fib[i-2];
// }
// console.log(fib);

// recursive way

function fib(n){
    if(n == 0)
    return [0];
    else if(n==1)
    return [0,1];
    else
     var fibo=fib(n-1);
     var nextelement=fibo[n-1]+fibo[n-2];
     fibo.push(nextelement);
    return fibo;
}

var resutl=fib(10);
console.log(resutl);
