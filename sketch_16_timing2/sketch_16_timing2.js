var circle;

/** SETUP DAT GUI **/
var settings = {
  delay:0
};
const gui = new dat.GUI();
gui.add(settings,"delay",0.0,2000.0,1.0);

/** OTHER METHODS **/

function setup() {
  createCanvas(windowWidth,windowHeight);
  circle = new InteractiveSlowCircle(width/2,height/2);
  
 
}


function draw() {
  background(252  ,236 , 150 );
  circle.show();
}

function mousePressed()
{
  if(circle.checkIfMouseInside())
  {
     circle.changeColorDelayed(settings.delay);
  }
}
