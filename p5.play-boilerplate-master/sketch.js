let hands = []
var angleh = 0
var anglem = 0
var angles = 0
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}
function draw(){
  background(255,255,255);  
  var d = new Date();
  var n = d.getHours();
  let m = d.getMinutes()
  let s = d.getSeconds()
  fill('red')
  textSize(20)
  text(d.getHours(),400,200)
  text(m,430,200)
  text(s,460,200)
}
