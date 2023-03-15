var lastTimeShownOnScreen = 0;
var cRed = 244;
var cBlue  = 175;
var cGreen = 208;  
var multiplier = 1.0;
function setup() {
  createCanvas(320,320);
  rectMode(CENTER);
  
}


function draw() {
  background(0);
  multiplier = multiplier *0.9;
  fill(cRed * multiplier,cGreen * multiplier,cBlue * multiplier);
  rect(width/2,height/2,width/2,height/2);

  /*** CHECK TIMING ***/
  
  var timePassed = millis()-lastTimeShownOnScreen;
  
  if(timePassed > 1000) //time is in milliseconds
  {
    
    multiplier = 1.0;
    lastTimeShownOnScreen = millis();
  }
  
  //try the below code to see how it can happen randomly between half a second and 2 secondos
  //if(timePassed > random(500,2000)) // time is in milliseconds
  //{
    
  //  multiplier = 1.0;
  //  lastTimeShownOnScreen = millis();
  //}
}
