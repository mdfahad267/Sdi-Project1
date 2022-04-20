"use strict"
// Nav //Bar
let navItem = document.getElementById("nav-item");
let humBerger = document.getElementById("humbugger");
humBerger.addEventListener("click", ()=>{
    navItem.classList.toggle("open");
    humBerger.classList.toggle("close");
})
navItem.addEventListener("click", () => {
    navItem.classList.remove("open");
    humBerger.classList.remove("close");
})

// Counter
// Increment

const counter1 = document.querySelector(".count-value-1");
const counter2 = document.querySelector(".count-value-2");
const counter3 = document.querySelector(".count-value-3");
let count = 0

setInterval(()=>{
    if(count < 34793){
    count++;
    counter1.innerText = count;
    }
},1)

setInterval(()=>{
    if(count < 45382){
    count++;
    counter2.innerText = count;
    }
},1)

setInterval(()=>{
    if(count < 54762){
    count++;
    counter3.innerText = count;
    }
},1)




