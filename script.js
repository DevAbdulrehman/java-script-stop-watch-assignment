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

function reset() {
  hr = "00";
  min = "00";
  sec = "00";
  msec = "00";
  document.getElementById("msec").innerText = msec;
  document.getElementById("sec").innerText = sec;
  document.getElementById("min").innerText = min;
  document.getElementById("hr").innerText = hr;
  clearInterval(myTime)
}
