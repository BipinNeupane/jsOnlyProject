const myClock = document.getElementById("myClock");

updoot();
// interval to update clock every 1 second
const myTimre = setInterval(updoot,1000)

// to stop the clock
document.getElementById("stopClock").onclick = function stopTime(){
    clearInterval(myTimre); 
}

// to start the clock again
document.getElementById("startAgain").onclick = function stopTime(){
    setInterval(updoot, 1000)
}

// Function for clock display

function updoot() {
  let date = new Date();
  myClock.innerHTML = formatClock(date);

  //   creating nested function to format the clock
    function formatClock(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = inputZero(hours);
        minutes = inputZero(minutes);
        seconds = inputZero(seconds);

    return `${hours}:${minutes}:${seconds}`;
  }
    function inputZero(time){
         time = time.toString();

         return time.length < 2 ? "0" + time : time;
    }
}
