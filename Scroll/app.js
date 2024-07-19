/*Element.getBoundingclientRect() method returns the size of an element and its position relative to the viewport.
and its position relative to the viewport.*/
//make date dynamic
/*pageYoffSet is a read - only windows properties that returns the 
the numaber of pixels of the document that has been scrolled to*/
/*Slice extract - a section of a string without modifying original string*/
/*offSet-top A number, representing the top position of an element,in pixels*/

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
//end of date dynamic
//add a nav toggle
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    //linksContainer.classList.toggle("show-links");
    const containerHeigh=linksContainer.getBoundingClientRect().height;
    const linksHeigh=links.getBoundingClientRect().height;
    if(containerHeigh===0){
        linksContainer.style.height=`${linksHeigh}px`;
    }else{
        linksContainer.style.height=0;
    }
})
/*Fixed navbar*/
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window,addEventListener('scroll', function(){
    //console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight>navHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav");
    }
    if(scrollHeight>500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
})
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link){
    link.addEventListener("click", function (e){
        //preventDefault();
    e.preventDefault();
    //navigate to specific target
    const id=e.currentTarget.getAttribute("href").slice(1);
    const element=document.getElementById(id);
    //console.log(element);
    //console.log(position);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeigh=linksContainer.getBoundingClientRect().height;
    const fixedNav=navbar.classList.contains("fixed-nav");
    let position= element.offsetTop-navHeight;
    if(!fixedNav){
        position= position-navHeight;
    }
    if(navHeight<=82){
        position= position+containerHeigh;
}
    window.scrollTo({
        left:0,
        top:position
    });
    linksContainer.style.height=0;
    });
});