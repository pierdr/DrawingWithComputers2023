let circlePos;
let circleSize = 100;
let mouseVec;

function setup() {
  circlePos = createVector(0,0);
   mouseVec = createVector(0,0);
  createCanvas(windowWidth, windowHeight);
  circlePos.x = width / 2;
  circlePos.y = height / 2;

  window.addEventListener("customEvent", function() {
    console.log("Custom event fired!");
  });
}

function draw() {
  background(200);
  mouseVec.x = mouseX;
  mouseVec.y = mouseY;
  ellipse(circlePos.x,circlePos.y, circleSize, circleSize);
}

function mousePressed() {
  
  if (p5.Vector.dist(circlePos,mouseVec) < circleSize / 2) {
    // Fire custom event
    let event = new Event("customEvent");
    window.dispatchEvent(event);
  }
}
