// console.log("hello world")
// console.log("1,2,3,4,5");
// let a=10;
// const b=10;
// var c=10;
// console.log("Value of a+b is:",a+b)

// with var we can redeclare the variables
// let i=1
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// do{
//     console.log(i++);
// }while(i<10){

//     console.log(i++);
// }

// let array1=[1,2,3,4,5];

// let obj1={
//     name:"Rahul",
//     age:25,
//     occupation:"Software engineer",
//     isEmployed:true,
//     salary:250000
// }

// console.log(obj1);
// output
// {name: 'Rahul', age: 25, occupation: 'Software engineer', isEmployed: true, salary: 250000}

// console.log(obj1.isEmployed);
// output
//true


// for(let i=0;i<array1.length;i++){
//     console.log(array[i]);
// }
// array1.forEach(e=>{
//     console.log(e);
// })


// let age=0;
// if(age===18|| age>18){
//     console.log("You are eligible to vote");
// }
// else if(age===0){
// console.log("You are not eligible to vote");
// }
// else{
//     console.log("you are child");
// }


//DOM-document object model
//DOM is a platform that program to dynamically update our content
// document.getElementById('heading2').innerText="another hello world"

// let p1 = document.getElementById('para1').innerHTML
// console.log(p1);   
// document.getElementById('para1').innerHTML = <strong>DOM Property</strong>//template literal
// let p2 = document.getElementsByClassName('para1').innerHTML = <strong>DOM Property</strong>

// document.getElementsByClassName("para2")[1].innerHTML = <h2>Using getElementsByClassName</h2>

// document.getElementsByTagName('p')[2].innerHTML=<h2>Last Tag Updated</h2>

// let para = document.createElement('p')
// para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id quo debitis non qui quam consequuntur reprehenderit reiciendis alias officiis labore nobis omnis, laudantium, eius quibusdam! Officiis molestiae a quisquam."
// document.getElementsById('container').appendChild(para)//add the child element

// document.getElementsById('container').removeChild(para)//remove the child element


let container = document.getElementById('container');

container.classList.add('change');
