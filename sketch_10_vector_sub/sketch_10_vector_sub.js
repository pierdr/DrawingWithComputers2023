
var mouseVector;
let centerPoint;


function setup() {
  createCanvas(windowWidth,windowHeight);
  mouseVector = createVector(0,0);
  centerPoint = createVector(windowWidth/2,windowHeight/2);
  noCursor();
}



function draw() {
  background(44 , 165 , 230  );
  mouseVector.x = mouseX;
  mouseVector.y = mouseY;
  
  var pointingVector = p5.Vector.sub(mouseVector,centerPoint );

  pointingVector.normalize();
  pointingVector.mult(100);
  strokeWeight(10);
  line(centerPoint.x,centerPoint.y,centerPoint.x+pointingVector.x,centerPoint.y+pointingVector.y);
  
  ellipse(mouseVector.x,mouseVector.y,5,5);
}
