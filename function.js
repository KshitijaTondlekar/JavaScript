// function sayhello()
// {
//     console.log ("I am a function")
// }
// sayhello()


// function calculate(a,b) {
//     return (a+b)
    
// }
// console.log(calculate(10,30))


// let a=[10,20,30]
// function array(val) {
//     return a.push(val)   
// }
// array(40)
// console.log(a)

function word(name) {
    return (name.charAt(0).toLowerCase()+name.substring(1,name.length).toUpperCase())    
}
console.log(word("kshitija"))



function name(username) {
     let user="kshitija"
    return(username==user?"ok username present":"enter the username")    
}
console.log(name("kshitija"))

  

function agevalidation(age) {
    return(age>18?"valid":"not valid")  
}
console.log(agevalidation(12))

