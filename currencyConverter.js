// converting in usd
let npr = document.getElementById("currencyInput").value;
npr = Number(npr);
console.log(npr);

function inUSD() {
  usd = npr / 113;
  return usd;
}

document.getElementById("submitBtn").onclick = function convert() {
  document.getElementById("inUSD").innerHTML = inUSD();
};
