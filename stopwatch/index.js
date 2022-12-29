let hrs = 00;
let mins = 00;
let secs = 00;
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let start = document.getElementById("btnStart");
let stop = document.getElementById("btnStop");
let resume = document.getElementById("btnResume");
let reset = document.getElementById("btnReset");
let interval;
stop.style.display = "none";
resume.style.display = "none";
reset.style.display = "none";

start.onclick = function(){
    interval = setInterval(startTime, 1000);
    stop.style.display = "initial";
    reset.style.display = "initial";
    start.style.display = "none";
}

function startTime(){
    secs++;
    sec.innerHTML = (secs<=9 ? "0"+secs : secs);
    if(secs>=59){
        mins++;
        min.innerHTML = (mins<=9 ? "0"+mins : mins);
        secs = 00;
        if(mins>=59){
            hrs++;
            hr.innerHTML = (hrs<=9 ? "0"+hrs :hrs);
            mins = 00;
        }
    }
}

stop.onclick = function(){
    clearInterval(interval);
    resume.style.display = "initial";
    reset.style.display = "initial";
    stop.style.display = "none";
}

reset.onclick = function(){
    clearInterval(interval);
    hr.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
    hrs=0;
    mins=0;
    secs=0;
    start.style.display = "initial";
    reset.style.display = "none";
    stop.style.display = "none";
    resume.style.display = "none";
}

resume.onclick = function(){
    interval = setInterval(startTime, 1000);
    resume.style.display = "none";
    stop.style.display = "initial";
}