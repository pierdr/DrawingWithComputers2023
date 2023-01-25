function setup() {
  createCanvas(windowWidth,windowHeight);  
}


function draw() {
  background(0);
  noStroke();
  fill(0,128,255);
  
  ellipse(width/2+map(mouseX,0,width,-50,50),height/2-20,10,10);
  stroke(255);
  strokeWeight(10);
  line(width/2 -50,height/2,width/2+50,height/2);
}
