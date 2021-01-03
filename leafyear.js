// const year= 535540;
// if (year % 4 == 0)
// console.log('year is leafyear');
// else
// console.log('year is not leafyear');

function isyear(year){
    if(year % 4 == 0 || year % 400==0)
    return true;
    else 
    return false;
}

const check =isyear(2016);
console.log(check);
