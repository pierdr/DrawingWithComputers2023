
var iCircle;
function setup() {
  createCanvas(windowWidth,windowHeight);
  iCircle = new InteractiveCircle(width*0.25,height/2);
  jCircle = new InteractiveCircle(width*0.75,height/2);
}


function draw() {
  background(252  ,236 , 150  );
  iCircle.resizeIfMouseIn();
  iCircle.show();
  
  jCircle.changeColorIfMouseIn();
  jCircle.show();
}
