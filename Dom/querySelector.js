// let para = document.querySelector(".cl")
// console.log(para);

// let para = document.querySelectorAll("h1 .cl")
// console.log(para);

let para = document.querySelectorAll(".cl")
console.log(para);
para.forEach((value,index)=>{
    value.textContent="bye"
})
console.log(para);



