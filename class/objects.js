// object can be created in 2 ways : constructors/literals:

// A: constructors:

// const obj = Object();
// obj.name = " khushi";
// console.log(obj);

// LITERALS:

// const user =
// {
//     name:'khushi',  /*name:key khushi:value*/
//     'full name':'khushi alaria',
//     age: 19,
//     class:'FEE',
//     email:'alariakhushi@gmail.com'
// }
// // console.log(user)

// // accessing object value
// console.log(user.email)

// // updating objects
// user.name='khushi alaria',
// console.log(user.name)
// console.log(user.age)
// console.log(user['full name'])

// const users =
// {
//     user1:
//     {
//         name:'khushi',
//         age:19
//     },
//     user2:
//     {
//         name:'garima',
//         age:21
//     },
//     user3:
//     {
//         name:'samerjeet',
//         age:13
//     }
// }
// console.log(users)
// console.log(users.user2)
// console.log(users['user3'])
// console.log(users.user2.age)

// users.user3.name = 'khushi alaria',
// console.log(users.user3.name)


// object merge
// const user1 = { name1:'khushi' , age1: 19};
// const user2 = { name2:'garima' , age2: 21};
// const user3 = Object.assign(user1,user2)
// const obj = Object.assign({},user1,user2)
// console.log(obj)
