console.log( 10 + 2 ); /*output:  12*/
console.log( 10 + "2");/*output: 102 */
console.log( typeof(10 + " 2"));
console.log(10 - '2'); /* string is converted into number */
console.log( typeof(10 - '2'));
console.log( 10 + "A");
console.log( 10 - "A");
console.log( 10  + "2"- "A"); /* output will be NaN explanation : 10 get sconverted to string before concatination with 2 but whne it tries to covert string A it wont be able to that therefore, NaN will come as an output */
console.log(10 - "2" + "A");

// string ot number
let a = ' 20';
let c = Number(a);
let d = parseInt(a);
console.log(typeof a);
console.log(typeof c);
console.log(typeof d);