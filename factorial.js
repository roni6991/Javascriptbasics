// var i=1;
// var factorial =1;
// while(i<=10){
//     factorial=factorial*i;
//     i++;
// }
// console.log(factorial);

function factorial(n){
    var i=1;
    var factorial=1;
    while (i<=n){
    factorial=factorial*i;
    i++;
    }
    return factorial;
}
 
var ans=factorial(10);
console.log(ans);