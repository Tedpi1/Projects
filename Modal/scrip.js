const modal=document.querySelector(".modal-btn");
const close=document.querySelector(".close-btn");
const cont=document.querySelector(".modal-overlay");

modal.addEventListener("click",function(){
    cont.classList.add("show-modal");
});

close.addEventListener("click",function(){
    cont.classList.remove("show-modal");
});

window.addEventListener("click",(e)=>{
})