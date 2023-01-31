//Declaration
var startingVector;
var displacementVector;
var resultingVector;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //Initialization
  startingVector = createVector(width/2,height/2);
  displacementVector = createVector(0,-50);
  
  console.log("just started"); //println equivalent in p5js
}


function draw() {
  background(0);
  stroke(255);
  
  for(var i=0;i<100;i++)
  {
    resultingVector = p5.Vector.add(startingVector,displacementVector);
    displacementVector.rotate(15);
    displacementVector.setMag(displacementVector.mag()*1.1);
    
    line(startingVector.x,startingVector.y,resultingVector.x,resultingVector.y);
    startingVector = resultingVector;
  }
  
  noLoop();
}
