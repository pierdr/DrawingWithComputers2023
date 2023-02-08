let circlePos;
let circleSize;
let mouseVec;
var colCircle;

function setup() {
  circlePos = createVector(0,0);
   mouseVec = createVector(0,0);
  createCanvas(windowWidth, windowHeight);
  circlePos.x = width / 2;
  circlePos.y = height / 2;
  circleSize=100;
  colCircle  = color(0,0,0);
  window.addEventListener("customEvent", function() {
    console.log("Custom event fired!");
    colCircle = color(random(127,255),random(127,255),random(127,255));
  });
}

function draw() {
  background(200);
  mouseVec.x = mouseX;
  mouseVec.y = mouseY;
  fill(colCircle);
  ellipse(circlePos.x,circlePos.y, circleSize, circleSize);
}

function mousePressed() {
  
  if (p5.Vector.dist(circlePos,mouseVec) < circleSize / 2) {
    // Fire custom event
    let event = new Event("customEvent");
    window.dispatchEvent(event);
  }
}
