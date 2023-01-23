
function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  drawMonkeyFace();
  drawPufferfishFace();
}

function drawMonkeyFace()
{
  noFill();
  ellipse((width/2) - 30,100,10,10);
  
  ellipse((width/2) + 30,100,10,10);
  
  ellipse(width/2 -5,125,2,2);
  ellipse(width/2 +5,125,2,2);
  
  line(width/2 -10,150,width/2+10,150);
}
function drawPufferfishFace()
{
  noFill();
  ellipse((width/4) - 50,200,10,10);
  
  ellipse((width/4) + 50,200,10,10);
  
  arc((width/4), 210, 40, 40, 0, PI);
}
