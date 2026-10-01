let rotationSpeed;
let angle;

function setup() {
  background(0);
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  //rectMode(CENTER); 

  angle = 0;
  rotationSpeed = random(-1,3);

  stroke('red');
  strokeWeight(3);

  //line(0,width/2,width,height/2);

}

function draw() {
  // Set background to black
 
 
 


  push();

  translate(width/2,height/2);

  let circSize = 200;
  stroke('red');
  circle(0,0,circSize);
  rotate(angle);
  line(0,0,circSize/2,0);
  pop();

  

  angle += rotationSpeed;
}
