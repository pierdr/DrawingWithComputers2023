//THIS IS JAVASCRIPT


//This is a global variable, it exists everywhere in your sketch
var diameter = 0;

function setup()
{
  
  //setup is a function and it is called just once at the beginning of a program
  diameter = 10;
}

function draw()
{
  //the draw function is called at every frame, and at every frame the program follower exectutes each line
  background(0);
  console.log(diameter);
  ellipse(width/2,height/2,diameter,diameter);
  diameter = diameter + 1;
}
