let count = 0;

// creating a function when button increase is clicked
document.getElementById("increase").onclick = function increaseCount(){
    count += 1
    document.getElementById("count").innerHTML = count;
}

// creating a function when button reset is clicked
document.getElementById("reset").onclick = function resetCount(){
    count = 0
    document.getElementById("count").innerHTML = count;
}

// creating a function when button decrease is clicked
// count -= 1 cause we have to do -1 everytime
document.getElementById("decrease").onclick = function decreaseCount(){
    count -= 1
    document.getElementById("count").innerHTML = count;
}