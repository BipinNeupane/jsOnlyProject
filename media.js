let audio = document.getElementById("myAudio");
let playRoll = document.getElementById("rickroll");
let pauseBtn = document.getElementById("pauseBtn");

playRoll.onclick = () => {
    audio.play();  
}

pauseBtn.onclick = () => {
    audio.pause();
}