//use var for variables that are changing during the program
var img;
var openSans;

//use let for variables that are not changing
let size = 256;
let caption = "IBRAHIM KODRA (1918-2006) - Idolo con chitarra, 1978";



function setup()
{
  createCanvas(windowWidth,windowHeight);
  img = loadImage("data/img.jpg");
  openSans =  loadFont("data/OpenSans-Bold.ttf");
  var var1 = 2.0;
  imageMode(CENTER);
 
}
function draw()
{
  background(238 , 202,  97);
  textFont(openSans);
  image(img,width/2,height/2,size,size);
  text(caption,20,20);
 
  
}
