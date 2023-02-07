//DECLARE
var cRed;
var sizes;

var flowers;

var mouse_v;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //INTIALIZE
  cRed = color(243,122,94);
  sizes =  [10,100,50,75,65,23];
  settings = {multiplier:0.2, offset:1.0};
  
  flowers = [];
  
  //CREATE FLOWERS
  sizes.forEach(function(size,index){
    flowers[index] = new Flower(100*index+50,height/2,size,size);
  });
  
  
  //MOUSE VECTOR 
  mouse_v = createVector(0,0);
}


function draw() {
  background(255);
   
   flowers.forEach(function(flower){
     
     flower.show();
     
   });
 
}

function mouseDragged()
{
  settings.multiplier = map(mouseX,0,width,0.5,3.0);
}
function mouseMoved()
{
  mouse_v.x = mouseX;
  mouse_v.y = mouseY;
}


function stem(x,y,size)
{
  //code for the stem
  line(x,y,x,y+size*2);
}
function petal(x,y,size)
{
  //code for one petal
  ellipse(x,y,size,size);
}
function leaf()
{
  //code for the leaf
}
