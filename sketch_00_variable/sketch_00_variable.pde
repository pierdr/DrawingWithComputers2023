//THIS IS JAVA

//This is a global variable, it exists everywhere in your sketch
int diameter = 0;

void setup()
{
  let fs = fullscreen();
  //setup is a function and it is called just once at the beginning of a program
  diameter = 10;
}

void draw()
{
  //the draw function is called at every frame, and at every frame the program follower exectutes each line
  background(0);
  println(diameter);
  ellipse(width/2,height/2,diameter,diameter);
  diameter = diameter + 1;
}
