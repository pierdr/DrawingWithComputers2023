function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
   background(245  ,223  ,252    );
   for(var x=50;x<windowWidth;x = x+100)
   {
     for(var y=50;y<windowHeight;y = y+100)
     {
       drawMonkeyFace(x,y);
     }
   }
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
