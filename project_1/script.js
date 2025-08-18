function openfeatures() {
    let allelems = document.querySelectorAll(".elem");
    let fullelemspages = document.querySelectorAll(".fullelem");
    let fullelemsbackbtn = document.querySelectorAll(".fullelem .back");
   

    allelems.forEach(function (elem) {
        elem.addEventListener("click", function () {
            fullelemspages[elem.id].style.display = "block";
        });
    });

    fullelemsbackbtn.forEach(function (back) {
        back.addEventListener("click", function () {
            fullelemspages[back.id].style.display = "none";
        });
    });
}

openfeatures();



function todolist(){

let form = document.querySelector(".addtask form");
let taskinput = document.querySelector(".addtask form input");
let taskdetailsinput = document.querySelector(".addtask form textarea");
let taskcheckbox = document.querySelector(".addtask form #check");

let currenttask = [];

if(localStorage.getItem("currenttask")){
currenttask= JSON.parse(localStorage.getItem("currenttask"))
}else{
    console.log("task list is empty")
}

function rendertask() {
    let alltask = document.querySelector(".alltask");
    
    let sum = "";
    
    currenttask.forEach(function (elem,idx) {
        sum += `<div class="task">
        <h1>${elem.task} <span class="${elem.check}">imp</span></h1>
        <button id="${idx}">Mark as Completed</button>
        </div>`;
    });
    
    alltask.innerHTML = sum;

    localStorage.setItem("currenttask",JSON.stringify(currenttask))

    document.querySelectorAll(".task button").forEach(function(btn){
        btn.addEventListener("click",function(){
            currenttask.splice(btn.id,1)
            rendertask()
        })
    })
}
rendertask();

form.addEventListener("submit", function (e) {
    e.preventDefault();
    currenttask.push({
        task: taskinput.value,
        details: taskdetailsinput.value,
        check: taskcheckbox.checked,
    });
    rendertask();
    taskinput.value="";
    taskdetailsinput.value="";
    taskcheckbox.checked=false;
});

}

todolist()



function dailypln(){
    
let dayplanner = document.querySelector(".dailyplanner");
let dayplandata = JSON.parse(localStorage.getItem("dayplandata"))|| [];
let hours = Array.from({length:18},(_,idx)=>`${6+idx}:00 - ${7+idx}:00`)
let wholedaysum=""
hours.forEach(function(elem,idx){
    
    let savedata = dayplandata[idx]||"";
    wholedaysum+=`
    <div class="dailyplannertime">
    <p>${elem}</p>
    <input id="${idx}" type="text" placeholder="..." value="${savedata}">
    </div>`
})
dayplanner.innerHTML=wholedaysum;

let dayplannerinput = document.querySelectorAll(".dailyplanner input")
dayplannerinput.forEach(function(elem){
 elem.addEventListener('input',function(){
dayplandata[elem.id] = elem.value
localStorage.setItem("dayplandata",JSON.stringify(dayplandata))
 })
})
}

dailypln()

// function moti(){
    
// let motivationcontent= document.querySelector(".motivation-2 h1")
// let motivationauthor = document.querySelector(".motivation-3 h1")

// async function fetchquotes() {
//     let response= await fetch('https://api.zenquotes.io/random')
//     let data = await response.json()

//     motivationcontent.innerHTML= data.content
//     motivationauthor.innerHTML= data.author
// }
// fetchquotes()
// }

// moti()



function potimer(){

let session= document.querySelector(".session")
let time= document.querySelector(".timer h1")
let startbtn=document.querySelector(".start")
let pausebtn=document.querySelector(".pause")
let resetbtn=document.querySelector(".reset")

let isworksession = true

let totalsecound = 25*60
let timeinterval =null

function updatetimer(){
    let minutes = Math.floor(totalsecound/60)
    let seconds = totalsecound %60

    time.innerHTML =`${String(minutes).padStart("2","0")}:${String(seconds).padStart("2","0")}`
}

function settimer(){
    clearInterval(timeinterval)
    if(isworksession){
        timeinterval = setInterval(function(){
            if(totalsecound>0){
                totalsecound--
                updatetimer()
            }else{
                isworksession =false;
                clearInterval(timeinterval)
                time.innerHTML = "05:00"
                session.innerHTML="take a break"
                session.style.backgroundColor = "blue"
                totalsecound = 5*60
            }
        },1000)
    }else{
        timeinterval=setInterval(function(){
            if(totalsecound>0){
                totalsecound--
                updatetimer()
            }else{
                isworksession= true
                clearInterval(timeinterval)
                time.innerHTML="25:00"
                session.style.backgroundColor="green"
                session.innerHTML="worksession"
                totalsecound= 25*60
            }
        },1000)
    }
}

function pause(){
    clearInterval(timeinterval)
}
function reset(){
    totalsecound=25*60
    clearInterval(timeinterval)
    updatetimer()
}
    startbtn.addEventListener('click', settimer)
    pausebtn.addEventListener('click', pause)
    resetbtn.addEventListener('click', reset)
}

potimer()