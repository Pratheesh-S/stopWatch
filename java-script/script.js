const hourEle=document.getElementById("hour");
const minEle=document.getElementById("minute");
const secEle=document.getElementById("second");
const msEle=document.getElementById("millisecond");
const startEle=document.getElementById("start");
const pauseEle=document.getElementById("pause");
const resetEle=document.getElementById("reset");
const saveEle=document.getElementById("save");
var hId=0;
var minId=0;
var sId=0;
var msId=0;
var ms=0;
var sec=0;
var min=0;
var hour=0;
var startNumber=0;

const start=()=>
{
    startNumber++;
    if(startNumber===1)
       interval();
 

}
const interval=()=>
{
    msId= setInterval(() => {
        if(ms>=1000)
        {
            ms=0;
        }
           ms++;
           msEle.textContent=ms;

         
     }, 1); 
     sId=setInterval(()=>{
         if(sec>=60)
         {
             sec=0;
         }
         sec++;
         secEle.textContent=sec;

  
     },1000)
     minId=setInterval(()=>{
        if(min>=60)
        {
            min=0;
        }
        min++;
        minEle.textContent=min;

 
    },60000)
    hId=setInterval(()=>{
        if(hour>=24)
        {
            hour=0;
        }
        hour++;
        hourEle.textContent=hour;

 
    },60000*24)

}
const pause=()=>
{
    clearInterval(hId);
    clearInterval(minId);
    clearInterval(sId);
    clearInterval(msId);
    startNumber=0;


}
const reset=()=>
{
    ms=0;
    sec=0;
    min=0;
    hour=0;
    msEle.textContent=ms;
    secEle.textContent=sec;
    minEle.textContent=min;
    hourEle.textContent=hour;
    pause();
    startNumber=0;
    tBodyEle.textContent="";
    sNo=0;
    tableEle.style.visibility="hidden"
   


    
}

var tBodyEle=document.getElementById("tbody")
var tableEle=document.querySelector("table");
var sNo=0;
const save=()=>
{ 
    sNo++;
    tableEle.style.visibility="visible"
    var trEle=document.createElement("tr");
    var tdEle1=document.createElement("td");
    var tdEle2=document.createElement("td");
    tdEle1.textContent=sNo;
    tdEle2.textContent=hour+":"+min+":"+sec+":"+ms;
    trEle.appendChild(tdEle1);
    trEle.appendChild(tdEle2);
    tBodyEle.appendChild(trEle);
}