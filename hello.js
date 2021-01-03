// var a=0;
// while(a<10){
//     console.log(a);
//     a++;
// }
// num =100
// switch(num){
//     case 1000:
//         console.log('I am 1000');
//         break;
//     case 100:
//         console.log('I am 100');
//         break;
//     case 20:
//     case 10:
//         console.log('I am either 10 or 10')
//         break;
//     default:
//             console.log('I dont know who you are')
// }

// function saysomething(){
//     console.log('I am giving up on you');
//     console.log('I am sorry that I could not get to you');
// }
// saysomething();

function doubleIt(num){
    var result = num*2;
    return result;
}

var first = doubleIt(40);
var second = doubleIt(40);
var total = first + second;
console.log(total);