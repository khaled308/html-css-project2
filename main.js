let images = document.querySelectorAll(".header .main-header img");
var my=0;
function change(){
    for(let i=0;i<images.length;i++){
        images[i].style.display="none";
    }
  my++;
  if(my>images.length){
      my = 1;
  }
 
  images[my-1].style.display="block";
}
setInterval(change,4000)

let toggle = document.querySelector(".toggle");
let list = document.querySelector(".parent");
let elemens = Array.from(document.querySelectorAll(".hidden"));
toggle.addEventListener("click",()=>{
    list.classList.toggle("active-list")
})
toggle.addEventListener("click",()=>{
    elemens.forEach((el)=>{
        el.classList.toggle("active")
    })
})