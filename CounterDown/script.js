const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const weekdays =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
const deadline=document.querySelector(".deadline");
const items=document.querySelectorAll(".deadline-format h2");
const giveaway=document.querySelector(".giveaway");
////console.log(items);
let tempDate=new Date();
let tempYear=tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
//let futureDate=new Date(2024, 7, 25, 11, 30, 0);
const futureDate=new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
////console.log(futureDate);
const year=futureDate.getFullYear();
const hours=futureDate.getHours();
const minutes=futureDate.getMinutes();

let month=futureDate.getMonth()-1;
////console.log(months[month]);
month=months[month];

const date=futureDate.getDate();
let weekday=futureDate.getDay();
weekday=weekdays[weekday];
giveaway.textContent=`Give away ends on ${weekday}, ${date}th ${month} ${year} ${hours}:${minutes}am`


//future time in ms
const futureTime=futureDate.getTime();
//console.log(futureTime);

function getRemainingTime(){
    const today=new Date().getTime();
    //console.log(today);
    const t=futureTime-today;
    //console.log(t);
    //1s=1000ms
    //1m=60s
    //1hr=60m
    //1d=24hr
    //values in ms
    const oneDay=24*60*60*1000;
    //console.log(oneDay);
    const oneHour=60*60*1000;
    const oneMinute=60*1000;
    //calculate all values
    let days=Math.floor(t/oneDay);
    //console.log(days);
    let hours=Math.floor((t%oneDay)/oneHour);
    //console.log(hours);
    let minutes=Math.floor((t%oneHour)/oneMinute);
    //console.log(minutes);
    let seconds=Math.floor((t%oneMinute)/1000);
    //console.log(seconds)

    //set values array;
    const values=[days,hours,minutes,seconds];
    function format(item){
        if(item<10){
            return item=`0${item}`;
        }
        return item;
    }
    items.forEach(function(item,index){
        item.innerHTML=format(values[index]);
    })
    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML=`</h4>The Timeline Has Expired<h4>`;
    }
}
//count down
let countdown=setInterval(getRemainingTime,1000);
getRemainingTime()