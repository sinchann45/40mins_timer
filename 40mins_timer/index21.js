let start=document.querySelector('.start');
let stop=document.querySelector('.stop');
let reset=document.querySelector('.reset');
let h1=document.querySelector('h1');

let secs=0;
let mins=40;
let timerid=null;

start.addEventListener('click',()=>{
  timerid=setInterval(work,1000);
 
})

function work(){
    if(secs==0){
        if(mins<0)
            alert('timeup')
        else{
        --mins; 
        secs=60;
        }
    }
    --secs;
    

    let formattedSecs = String(secs).padStart(2, '0');
  let formattedMins = String(mins).padStart(2, '0');

  h1.innerHTML = formattedMins + ':' + formattedSecs;
}

stop.addEventListener('click',()=>{
    clearInterval(timerid);
     
    })

reset.addEventListener('click',()=>{
    secs=0;
    mins=40;
    clearInterval(timerid);

    let formattedSecs = String(secs).padStart(2, '0');
  let formattedMins = String(mins).padStart(2, '0');
  h1.innerHTML = formattedMins + ':' + formattedSecs;
   
   })