let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

context.beginPath();
context.rect(40, 90, 60, 60);//square
context.rect(60, 60, 60, 60);//back square
// connecting lines
context.moveTo(120,120);
context.lineTo(100,150);
context.moveTo(120,60);
context.lineTo(100,90);
context.moveTo(60,60);
context.lineTo(40,90);
context.moveTo(60,120)
context.lineTo(40,150)
context.lineWidth = 2;
context.stroke();
