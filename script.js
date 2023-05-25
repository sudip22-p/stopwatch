const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const stopBtn = document.getElementById("stopBtn");
const timeShowingBox = document.querySelector(".timeShow");
//min sec and msec variables
let msec = 00;
let sec = 00;
let min = 00;
let timerId = null; //to check whether stopwatch is stated or not
//function to start timer
function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
  }
  if (sec == 60) {
    sec = 0;
    min++;
  }

  //showing the time
  let msecString = msec < 10 ? `0${msec}` : msec;
  let secString = sec < 10 ? `0${sec}` : sec;
  let minString = min < 10 ? `0${min}` : min;
  timeShowingBox.innerHTML = ` ${minString} : ${secString} : ${msecString} `;
}
//calling start timer after pressing start btn
startBtn.addEventListener("click", () => {
  console.log("start clicked");
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});
//stop clock /time  after pressing stop btn
stopBtn.addEventListener("click", () => {
  console.log("stop clicked");
  clearInterval(timerId);
});
//reset  timer after pressing start btn
resetBtn.addEventListener("click", () => {
  console.log("reset clicked");
  clearInterval(timerId);
  timeShowingBox.innerHTML = ` 00 : 00 : 00 `;
  msec = sec = min = 0;
});
