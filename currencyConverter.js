// converting in usd

function inUSD() {
  let usd = dpr / 126;
  return usd;
}

function inINR() {
  let inr = dpr / 1.6;
  return inr;
}

document.getElementById("submitBtn").onclick = function convert() {
  let npr = document.getElementById("currencyInput").value;
  dpr = Number(npr);
  document.getElementById("inUSD").innerHTML = inUSD().toLocaleString("en-US", {
    style: "currency",
    currency: "usd",
  });
  document.getElementById("inINR").innerHTML = inINR().toLocaleString("hi-IN", {
    style: "currency",
    currency: "inr",
  });
};
