const myClock = document.getElementById("myClock");

updoot();
setInterval(updoot,1000)

// Function for clock display

function updoot() {
  let date = new Date();
  myClock.innerHTML = formatClock(date);

  //   creating nested function to format the clock
    function formatClock(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  }
}
