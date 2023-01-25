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
  
  
  resultingVector = p5.Vector.add(startingVector,displacementVector);
  
  line(startingVector.x,startingVector.y,resultingVector.x,resultingVector.y);
  
  startingVector = resultingVector;
  
  resultingVector = p5.Vector.add(startingVector,displacementVector);
  
  line(startingVector.x,startingVector.y,resultingVector.x,resultingVector.y);
  
  startingVector = resultingVector;
  displacementVector.rotate(radians(45));
  
  resultingVector = p5.Vector.add(startingVector,displacementVector);
  
  line(startingVector.x,startingVector.y,resultingVector.x,resultingVector.y);
  noLoop();
}
