function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}


function draw() {
   background(245  ,223  ,252    );
   drawMonkeyFace(mouseX,mouseY);
}
function drawMonkeyFace( x,  y)
{
  noFill();
  ellipse(x - 30,y,10,10);
  
  ellipse(x + 30,y,10,10);
  
  ellipse(x -5,y+25,2,2);
  ellipse(x +5,y+25,2,2);
  
  line(x -10,y+50,x+10,y+50);
}
