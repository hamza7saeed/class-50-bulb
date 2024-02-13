// let body = document.body;
// let headTitle = document.getElementById("father")
// let button = document.createElement("button");
// button.innerText = "Click on ";
// button.onclick = function change(){
//     let v =document.getElementById("index1")
//     console.log(headTitle.removeChild(v));
// }
// button.setAttribute('onclick', "setTimeout(change,1000)")
// function change(){
//     let v = headTitle.childNodes[2]
//     console.log(headTitle.removeChild(v));
// }
// button.addEventListener("onclick",'change');
// body.appendChild(button)
// let arr = [1,23,4,56,7,7];
// let res = 0;
// for (let i = 0; i < arr.length ; i++ ){
//     res+=arr[i]
// }
// console.log(res)


// let see = {
// name : "hamza",
// age: 44,
//     fun(){
//         console.log("my name is "+this.name+" & i am " + this.age + " years old");
//     }
// }
// see.fun();

// function fun (name,age){
// this.name = name;
// this.age = age;
// this.greet =  function(){
// console.log("hello " + this.name + " your age is "+this.age+".");
// }
// }

// let v = Object.create(fun);
// v.name = "hamza";
// v.greet()

// let v = new fun("hamza",27)
// v.greet()
// console.log(v)

// for (let i in v){
//     console.log(i +": "+  v[i])
// }

// function ope(val1,val2,operation){
   
//  return operation(val1,val2);
// }

// function Disply (status, res){
//     this.status = status;
//     this.res = res
//     this.fullDisply = function(){
//         console.log(this.status , this.res);

//     }
// }

// function diffOpr (val1,val2){
//     return (val1 * val2)
// }
// let result = ope(4,5,diffOpr);
// let v = new Disply ("Here is the result:", result);
// v.fullDisply();

// let allLi = document.querySelector(".father");
// allLi.style.color = "red";
// console.log(allLi.parentElement.children[3].style.color = "yellow")


// for (let i of allLi){
//     i.style.color = "red";
// }
// console.log(allLi)

// let u = document.createElement("h2")
// u.innerText = "hahahah"
// let v = document.querySelector(".father");
// v.insertAdjacentHTML("beforebegin","<h1>Hello g </h1>");
// let x = v.insertAdjacentElement("beforeend",u);
// x.style.color = "green"


let body = document.body;
body.style.paddingLeft = "40%"
let head = document.head;
let headLink = document.createElement("link");
headLink.type = "image/x-icon";
headLink.rel = "icon";
headLink.href = "https://cdn-icons-png.flaticon.com/512/178/178591.png";

body.style.backgroundColor = "black";
// ------------------------------------------------------

let but = document.querySelector(".on").addEventListener('click', function(){
 let click = document.querySelector(".on");
 click.innerText= "Turn ON"
 let ele = document.querySelector("img")
 ele.src = "./bulb on.jpg"
})
let but1 = document.querySelector(".off").addEventListener('click', function(){
    let click = document.querySelector(".off");
    click.innerText= "Turn OFF"
    let ele1 = document.querySelector("img")
    ele1.src = "./bulb off.jpg"
   })

  let v = document.querySelectorAll("img")

v.forEach(function(size){
    size.style.display = "flex";
    size.style.justifyContent = "center";
    size.style.height = "350px"
    
})


// let but1 = document.querySelector("button").addEventListener('click', function(){
//     //  let click = document.querySelector("button");
//      let ele1 = document.querySelector("img")
//      ele1.src = "/bulb off.jpg";
//     })
    

head.appendChild(headLink)






