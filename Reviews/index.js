const review=[
    {
        name:'Antoney Ocheing',
        image:'p1.jpg',
        job:'Frontend Developer',
        info:'With the necessary equipments available, <br> I Antoney Ochieng will offer desire result to the organization'
    },
    {
        name:'Francis Otieno',
        image:'p2.jpg',
        job:'Interior Designer',
        info:'I am a professional interior designer with over 10 years of experience. <br> I will help you design your dream home'
    },
    {
        name:'Joyce Wanjiru',
        image:'p3.jpg',
        job:'Graphic Designer',
        info:'I am a professional graphic designer with over 10 years of experience. <br> I will help you design your dream website'
    }
]
const img=document.getElementById('person-img');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');
const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
const randomBtn=document.querySelector('.random-btn');

// set starting item
let currentItem=0;

// load initial item
window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem);
})

// show person based on item
function showPerson(person){
    const item=review[person];
    img.src=item.image;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.info;
}

// show next person
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>review.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})
//show the previous person
prevBtn.addEventListener('clck',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=review.length-1;
    }
    showPerson(currentItem);    
})
//random person
randomBtn.addEventListener('click',function(){
    currentItem=Math.floor(Math.random()*review.length);
    showPerson(currentItem);    
})  