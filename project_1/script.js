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

let dayplanner = document.querySelectorAll(".dailyplannertime");
let dayplannerinput = document.querySelectorAll(".dailyplannertime input ")

