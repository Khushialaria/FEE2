// for of: iterate over values
// let str = " yash";

// for (let i of str){
//     console.log(i);
//     console.log(i);
// }


// let arr = [ 1,2,3,4]
// for (let i of arr)
// {
//     console.log(arr[Symbol.iterator])
// }

// for in: iterate over keys
let Obj = { name: 'khushi'};
for(let i in Obj)
{
    console.log(Obj[Symbol.iterator]);
    console.log(Obj[i]);
}