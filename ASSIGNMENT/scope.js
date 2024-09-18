//  scope: 1:global scope 2: functional scope 3:block scope  4:lexial scope

// 1. Global Space : by default all variables have global space
// let a = " globar scope";
// var b = " global scope";
// const c = " global scope";

//  function scopeGlobal()
//  {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//  }

//  scopeGlobal()
//  {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//  }

// 2. functional scope : 

let c = 50 ; 
function calsum(a,b)
{
    let c = a+b;
    console.log(c);
}
calsum(5,3);
console.log(c);


