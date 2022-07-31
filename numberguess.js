const answer = Math.floor(Math.random() * 11);
let guessCount = 0;
console.log(answer);

document.getElementById("submitBtn").onclick = function guess() {
  let userInput = document.getElementById("guessNumber").value;
  guessCount += 1;

  // using ternary operator

  userInput == answer
    ? alert(
        `CONGRATULATIONS! \n You guessed it corret in exactly in ${guessCount} guesses`
      )
    : userInput > answer
    ? alert("Nope! Too high.")
    : alert("Nope! Too low.");
};
