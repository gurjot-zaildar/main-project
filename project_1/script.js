function openfeatures(){
    let allelems = document.querySelectorAll(".elem");
let fullelemspages = document.querySelectorAll(".fullelem");
let fullelemsbackbtn = document.querySelectorAll(".fullelem .back");

allelems.forEach(function(elem){
   elem.addEventListener("click",function(){
    fullelemspages[elem.id].style.display='block'
   })
})

fullelemsbackbtn.forEach(function(back){
back.addEventListener("click",function(){
    fullelemspages[back.id].style.display="none"
})
})
}
openfeatures()

let form= document.querySelector(".addtask form");
let taskinput=document.querySelector(".addtask form input")
let taskdetailsinput=document.querySelector(".addtask form textarea")
let taskcheckbox=document.querySelector(".addtask form #check")

let currenttask = [{
        task : "gym jyo",
        details: "mai bhi ja raha hu",
        check: true
},
{
     task : " jyo",
        details: "mai bhi",
        check: false
}]


function rendertask(){
    let alltask = document.querySelector(".alltask");
    
    let sum = "";
    
    currenttask.forEach(function(elem){
        sum+= `<div class="task">
        <h1>${elem.task} <span class="${elem.check}">imp</span></h1>
        <button>Mark as Completed</button>
        </div>`
    })
    
    alltask.innerHTML=sum;
}
rendertask()


form.addEventListener("submit",function(e){
    e.preventDefault()
    // console.log(taskinput.value)
    // console.log(taskdetailsinput.value)
    // console.log(taskcheckbox.checked)
    currenttask.push()
})
