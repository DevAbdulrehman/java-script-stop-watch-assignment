let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;

function time() {
  msec++;
  document.getElementById("msec").innerText = msec;
  if (msec == 100) {
    msec = 0;
    sec++;
    document.getElementById("sec").innerText = sec;
    if (sec == 60) {
      sec = 0;
      min++;
      document.getElementById("min").innerText = min;
    }
    if (min == 60) {
      min = 0;
      hr++;
      document.getElementById("hr").innerText = hr;
    }
  }
}
function start() {
   myTime = setInterval(time, 10); 
}

function stop() {
   clearInterval(myTime); 
}

function reset(){
  document.getElementById("msec").innerText = "00";
  document.getElementById("sec").innerText = "00";
  document.getElementById("min").innerText = "00";
  document.getElementById("hr").innerText = "00";
}



