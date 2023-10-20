// first letter should be small and print words which having 5 character
// const names=["Alice","Boa","Charlie","David","Evo","Frank","Grace"]
// let b= names.map((value,index)=>{
//     return value.substring(0,1).toLowerCase()+value.substring(1,value.length)
// })
// console.log(b)

// let char=b.filter((value,index)=>{
//     return value.length==5;
// })
// console.log(char)



// sum of price

// const shoppingCart =[
//     {item:"Shirt",price:20},
//     {item:"Jeans",price:50},
//     {item:"Hat",price:10},
//     {item:"Shoes",price:60},
// ]

// let b=shoppingCart.map((value)=>{
//     return value.price
// })

// let c=b.reduce((acc,val)=>{
//     return acc+val
// })
// console.log(c)




// // create new array with only the names of people who are older than 30

// const people=[
//     {name:'Alice',age:25},
//     {name:'Bob',age:35},
//     {name:'Charlie',age:40},
//     {name:'David',age:28},

// ]
// let b=people.filter((value)=>{
//     return value.age>30;
// })
// let c=b.map((value)=>{
//     return value.name
// })
// console.log(c);



// capitalize first letter of each word in the given array using map method

// const words = ['hello','world','javascript','coding']

// let b=words.map((value,index)=>{
//     return value.substring(0,1).toUpperCase()+value.substring(1,value.length)
// })
// console.log(b);




// create a new array student who are passed (scored 70 or higher)
const student=[
    {name:'Alice',score:80},
    {name:'Bob',score:65},
    {name:'Charlie',score:90},
    {name:'David',score:45},  
]
let b= student.filter((value,index)=>{
    return value.score>=70
})

let c= b.map((value)=>{
    return value
})
console.log(c);



// total score of all students in a class represented as an array of arrays using reduce method

// const classScore=[
//     [80,90,70],
//     [60,75,85],
//     [95,88,92]
// ]
// let b=classScore.flat()
// // console.log(b);

// let c= b.reduce((acc,val)=>{
//     return acc+val
// })
// console.log(c);


