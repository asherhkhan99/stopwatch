

 var min = 0
 var sec = 0
 var msec = 0

 var minHeading = document.getElementById("min")
 var secHeading = document.getElementById("sec")
 var msecHeading = document.getElementById("msec")

 var interval;

 function timer(){
     msec++
     msecHeading.innerHTML = msec
     if(msec >= 100){
         sec++
         secHeading.innerHTML = sec
         msec = 0
     }
     else if(sec >= 60){
         min++
         minHeading.innerHTML = min
         sec = 0
     }
 } 
function start(){
    interval = setInterval(timer,10)   //10 milisec means 10*100 = 1000 msec = 1 sec
    document.getElementById("startBtn").disabled = true
    
}

function pause(){
    clearInterval(interval)
    document.getElementById("startBtn").disabled = false
    
    
    
}

function reset(){
    min = 0
    sec = 0
    msec = 0
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    pause()
    
    
    
}





function setLaps(){
    var p = document.createElement("p") ;
    var timer = document.getElementById("min").innerText + " : " + document.getElementById("sec").innerText + " : " + document.getElementById("msec").innerText;
    var ptext = document.createTextNode(timer);
    p.appendChild(ptext);
    var laps = document.getElementById("laps");
    laps.appendChild(p);

    
    
}