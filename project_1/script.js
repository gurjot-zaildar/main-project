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